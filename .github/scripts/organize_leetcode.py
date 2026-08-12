from pathlib import Path
import re
import shutil


INBOX = Path("leetcode/inbox")
LEETCODE = Path("leetcode")

DIFFICULTIES = {"Easy", "Medium", "Hard"}


def get_difficulty(readme: Path) -> str | None:
    """Extract Easy/Medium/Hard from LeetSync README."""

    if not readme.exists():
        return None

    content = readme.read_text(encoding="utf-8", errors="ignore")

    # Handles common formats such as:
    # Difficulty: Easy
    # Difficulty: Medium
    # Difficulty: Hard

    match = re.search(r"difficulty\s*:\s*(easy|medium|hard)", content, re.IGNORECASE)

    if match:
        return match.group(1).capitalize()

    # Fallback: search for difficulty words in the README.
    for difficulty in DIFFICULTIES:
        if re.search(rf"\b{difficulty}\b", content, re.IGNORECASE):
            return difficulty

    return None


def parse_problem_folder(folder_name: str):
    """
    Converts:

        1-two-sum

    into:

        0001
        two-sum
    """

    match = re.match(r"^(\d+)[-_](.+)$", folder_name)

    if not match:
        return None, None

    number = match.group(1).zfill(4)
    title = match.group(2)

    return number, title


def organize_problem(problem_dir: Path):
    print(f"\nProcessing: {problem_dir}")

    readme = problem_dir / "README.md"

    difficulty = get_difficulty(readme)

    if difficulty is None:
        print(f"WARNING: Could not determine difficulty for {problem_dir.name}")
        return False

    number, title = parse_problem_folder(problem_dir.name)

    if number is None:
        print(f"WARNING: Could not parse problem name: {problem_dir.name}")
        return False

    destination = LEETCODE / difficulty / f"{number}-{title}"

    destination.parent.mkdir(parents=True, exist_ok=True)

    if destination.exists():
        print(f"Already exists: {destination}")

        # Remove the inbox copy because the
        # organized version already exists.
        shutil.rmtree(problem_dir)

        return True

    print(f"Moving:\n  {problem_dir}\n  -> {destination}")

    shutil.move(str(problem_dir), str(destination))

    return True


def main():
    if not INBOX.exists():
        print("No LeetCode inbox found.")
        return

    problems = [path for path in INBOX.iterdir() if path.is_dir()]

    if not problems:
        print("Inbox is empty.")
        return

    successful = 0

    for problem in sorted(problems):
        if organize_problem(problem):
            successful += 1

    print(f"\nFinished: {successful}/{len(problems)} problem(s) organized.")


if __name__ == "__main__":
    main()
