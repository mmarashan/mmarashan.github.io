import os
import sys

from PIL import Image, ImageFile


def convert_to_webp(file_path: str, quality: int == 100):
    print(f"convert_to_webp input: {file_path}")
    image_file: ImageFile.ImageFile = Image.open(file_path)
    new_image_name: str = f'{image_file.filename}.webp'
    print(f"convert_to_webp output: {new_image_name}, quality: {quality}")

    image_file.save(new_image_name, 'webp', quality=quality, lossless=False)


def resize(file_path: str, scale_factor: float == 1.0):
    print(f"resize input: {file_path}, scale_factor: {scale_factor}")
    image_file: ImageFile.ImageFile = Image.open(file_path)
    print(f"resize original size : {image_file.size}")
    new_size = (int(image_file.width * scale_factor), int(image_file.height * scale_factor))
    print(f"resize new size : {new_size}")
    resized = image_file.resize(new_size)
    new_image_name: str = f'{image_file.filename}.resized.{image_file.format}'
    print(f"resize output: {new_image_name}")
    resized.save(new_image_name)


if __name__ == "__main__":
    argc_count = len(sys.argv) - 1
    if argc_count < 3:
        print("For convert to webp use: python3 imgcon.py to_webp <file_path> <quality>")
        print("For resize use: python3 imgcon.py resize <file_path> <scale_factor>")
        sys.exit(1)
    command = sys.argv[1]
    if command not in ["to_webp", "resize"]:
        print(f"Unknown command {command}")
        sys.exit(1)
    file_path = sys.argv[2]
    if not os.path.isfile(file_path):
        print(f"File {file_path} does not exist")
        sys.exit(1)

    if command == "to_webp":
        if argc_count >= 2:
            quality = sys.argv[3]
        else:
            quality = 100
        convert_to_webp(file_path=file_path, quality=quality)
    if command == "resize":
        if argc_count >= 2:
            scale_factor = float(sys.argv[3])
        else:
            scale_factor = 1.0
        resize(file_path=file_path, scale_factor=scale_factor)
