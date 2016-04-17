# PHPQS
PHP Quality & Security Analyser

## Requirements
- composer
- php-cli

## Usage (tl;dr)
```
git clone https://github.com/7rin0/phpqs.git
cd phpqs
composer install
npm install
./phpqs path/to/yout/php/project
```

## Options

#### Some details
After clone this project if you execute directly the script ``` ./phpqs ``` without properly install the project his dependencies should be installed automatically.

#### View reports through http server:
``` make sreports ```

#### Check your project using a specific script:
``` ./bin/{pdepend|phpcbf|phpcpd|phpcs|phpdcd|phploc|phpmd} {options} {arguments} ```

i.e: ``` ./bin/phpcs path/to/yout/php/project --report=xml --report-file=phpcs-report.xml ```


## TODO
- Add phpmetrics
- Add SensioLabs Security Checker
- Add OWASP_Code_Review_Project

## Inside
This script combines security and quality 100% fuelled by the following great applications:
- [pdepend](https://github.com/pdepend/pdepend) *"... shows you the quality of your design in the terms of extensibility, reusability and maintainability ..."*
- [phpmd](https://github.com/phpmd/phpmd)  *"It takes a given PHP source code base and look for several potential problems within that source ..."*
- [phpcbf, phpcs](https://github.com/squizlabs/PHP_CodeSniffer)  *"PHP_CodeSniffer tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards."*
- [phpcpd](https://github.com/sebastianbergmann/phpcpd)  *"Copy/Paste Detector (CPD) for PHP code."*
- [phpdcd](https://github.com/sebastianbergmann/phpdcd)  *"It scans a PHP project for all declared functions and methods and reports those as being "dead code" that are not called at least once."*
- [phploc](https://github.com/sebastianbergmann/phploc)  *"A tool for quickly measuring the size of a PHP project."*
