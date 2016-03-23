# PHPQS
PHP Quality & Security Analyser

## Requirements
- composer
- php-cli

## Usage
While the main script is being developed you can expect long reports output in terminal. Easy as clone this repository and run phpqs script with your projects path as argument:
- git clone https://github.com/7rin0/phpqs.git
- ./phpqs your/relative/or/absolute/project/path

## Todo
- allow to call isolated analyser
- evaluate missing tests, scans types and add new features

## Inside
First of all this "combinator" off security and quality tests/analysers it is 100% fuelled by the following great applications:
- [pdepend](https://github.com/pdepend/pdepend) *"... shows you the quality of your design in the terms of extensibility, reusability and maintainability ..."*
- [phpmd](https://github.com/phpmd/phpmd)  *"It takes a given PHP source code base and look for several potential problems within that source ..."*
- [phpcbf, phpcs](https://github.com/squizlabs/PHP_CodeSniffer)  *"PHP_CodeSniffer tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards."*
- [phpcpd](https://github.com/sebastianbergmann/phpcpd)  *"Copy/Paste Detector (CPD) for PHP code."*
- [phpdcd](https://github.com/sebastianbergmann/phpdcd)  *"It scans a PHP project for all declared functions and methods and reports those as being "dead code" that are not called at least once."*
- [phploc](https://github.com/sebastianbergmann/phploc)  *"A tool for quickly measuring the size of a PHP project."*

## You are always welcome to enjoy and contribute :)
