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

    return sum(
        1
        for item in directory.iterdir()
        if item.is_dir()
    )


def update_count(content: str, marker: str, count: int) -> str:
    """
    Update only the number after a README marker.

    Example:

        <!-- EASY_COUNT --> 5

    becomes:

        <!-- EASY_COUNT --> 6
    """

    pattern = rf"({re.escape(marker)}\s*)\d+"

    return re.sub(
        pattern,
        rf"\g<1>{count}",
        content,
        count=1,
    )


def update_timestamp(content: str, timestamp: str) -> str:
    """
    Update only the timestamp after LAST_UPDATED.
    """

    pattern = r"(<!-- LAST_UPDATED -->\s*)[^\r\n]*"

    return re.sub(
        pattern,
        rf"\g<1>{timestamp}",
        content,
        count=1,
    )


def main():
    if not README.exists():
        print("README.md not found.")
        return

    counts = {
        difficulty: count_problems(directory)
        for difficulty, directory in DIFFICULTIES.items()
    }

    total = sum(counts.values())

    updated = datetime.now(timezone.utc).strftime(
        "%Y-%m-%d %H:%M UTC"
    )

    content = README.read_text(
        encoding="utf-8"
    )

    # Update only the numbers.
    content = update_count(
        content,
        "<!-- EASY_COUNT -->",
        counts["Easy"],
    )

    content = update_count(
        content,
        "<!-- MEDIUM_COUNT -->",
        counts["Medium"],
    )

    content = update_count(
        content,
        "<!-- HARD_COUNT -->",
        counts["Hard"],
    )

    content = update_count(
        content,
        "<!-- TOTAL_COUNT -->",
        total,
    )

    # Update only the timestamp.
    content = update_timestamp(
        content,
        updated,
    )

    README.write_text(
        content,
        encoding="utf-8",
    )

    print(f"Easy: {counts['Easy']}")
    print(f"Medium: {counts['Medium']}")
    print(f"Hard: {counts['Hard']}")
    print(f"Total: {total}")
    print(f"Updated: {updated}")


if __name__ == "__main__":
    main()