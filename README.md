# Domain Generator

A Node.js command-line tool that generates random domain names using customizable parameters and specified top-level domains (TLDs).

## Features

- Interactive command-line interface
- Customizable domain name length
- Option to generate domains with letters only, numbers only, or both
- Configurable number of domains to generate
- Adjustable refresh interval for continuous generation
- Optional logging to file
- Configurable TLD list via domains.txt

## Prerequisites

- Node.js installed on your system

## Installation

1. Clone this repository:
```bash
git clone https://github.com/theoldzoom/domainGenerator.git
cd domainGenerator
```

2. The script comes with a default `domains.txt` file containing common TLDs
3. You can edit `domains.txt` to customize the TLD list according to your needs

Example of the `domains.txt` format:
```
com
net
org
io
```

## Usage

1. Run the script:
```bash
node index.js
```

2. Follow the interactive prompts:
   - Enter desired domain length (default: 3)
   - Choose character type:
     1. Letters only (a-z)
     2. Numbers only (0-9)
     3. Letters and numbers combined
   - Specify how many domains to generate
   - Set refresh interval in seconds
   - Choose whether to log results to file

## Output

The script will:
- Display generated domains in the console
- Refresh the list at your specified interval
- If logging is enabled, append domains to `domains.log` with timestamps

Example output:
```
xyz.com
123.net
abc123.org
```

## Log File Format

When logging is enabled, domains are appended to `domains.log` with each batch separated by a newline.

## Error Handling

- Invalid inputs will fall back to default values
- Empty lines in `domains.txt` are automatically filtered out

## Customization

You can modify:
- The TLD list by editing domains.txt
- The default domain length in the source code
- The character set for domain generation
- The logging format
- Additional TLD validation rules

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/theoldzoom/domainGenerator/tree/master/LICENSE) page for details.