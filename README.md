# PHPQS
PHP Quality & Security Analyser

## Requirements
- composer
- php-cli

## Usage
While the main script is being developed you can expect long reports output in terminal. Easy as clone this repository and run phpqs script with your projects path as argument:
- git clone https://github.com/7rin0/phpqs.git
- ./phpqs your/relative/or/absolute/project/path

## Todo or doing
- generate a report for each execution and organized by analyser
- allow to call isolated analyser
- evaluate missing tests, scans types and add new features

## Inside
First of all this "combinator" off security and quality tests/analisers it is 100% fuelled by the following great applications:
- [pdepend](https://github.com/pdepend/pdepend)
- [phpmd](https://github.com/phpmd/phpmd)
- [phpcbf](https://github.com/squizlabs/PHP_CodeSniffer)
- [phpcs](https://github.com/squizlabs/PHP_CodeSniffer)
- [phpcpd](https://github.com/sebastianbergmann/phpcpd)
- [phpdcd](https://github.com/sebastianbergmann/phpdcd)
- [phploc](https://github.com/sebastianbergmann/phploc)
