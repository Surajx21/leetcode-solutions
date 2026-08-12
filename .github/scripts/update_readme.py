from pathlib import Path
from datetime import datetime, timezone
import re


README = Path("README.md")
LEETCODE = Path("leetcode")

DIFFICULTIES = {
    "Easy": LEETCODE / "Easy",
    "Medium": LEETCODE / "Medium",
    "Hard": LEETCODE / "Hard",
}


def count_problems(directory: Path) -> int:
    if not directory.exists():
        return 0

    return sum(1 for item in directory.iterdir() if item.is_dir())


def main():
    if not README.exists():
        print("README.md not found.")
        return

    counts = {
        difficulty: count_problems(directory)
        for difficulty, directory in DIFFICULTIES.items()
    }

    total = sum(counts.values())

    updated = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    content = README.read_text(encoding="utf-8")

    # Update the optional statistics section.
    content = re.sub(
        r"<!-- EASY_COUNT -->.*",
        f"<!-- EASY_COUNT --> {counts['Easy']}",
        content,
    )

    content = re.sub(
        r"<!-- MEDIUM_COUNT -->.*",
        f"<!-- MEDIUM_COUNT --> {counts['Medium']}",
        content,
    )

    content = re.sub(
        r"<!-- HARD_COUNT -->.*",
        f"<!-- HARD_COUNT --> {counts['Hard']}",
        content,
    )

    content = re.sub(
        r"<!-- TOTAL_COUNT -->.*",
        f"<!-- TOTAL_COUNT --> {total}",
        content,
    )

    content = re.sub(
        r"<!-- LAST_UPDATED -->.*",
        f"<!-- LAST_UPDATED --> {updated}",
        content,
    )

    README.write_text(content, encoding="utf-8")

    print(f"Easy: {counts['Easy']}")
    print(f"Medium: {counts['Medium']}")
    print(f"Hard: {counts['Hard']}")
    print(f"Total: {total}")
    print(f"Updated: {updated}")


if __name__ == "__main__":
    main()
