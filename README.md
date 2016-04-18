# PHPQS
PHP Quality & Security Analyser

## Requirements
- composer
- php-cli
- node (list reports directories on browser; option --open)

## Usage (TL;DR)
```
git clone https://github.com/7rin0/phpqs.git
cd phpqs
composer install
npm install
./phpqs path/to/yout/php/project
```

## Options

#### Dependency detection
Each time the script ``` ./phpqs ``` is execute it verifies that composer and node dependencies are already installed and if not it is done automatically

#### View reports through http server:
run: ``` make open-reports ``` 

run checks with option "--open": ``` ./phpqs path/to/yout/php/project --open```

#### Use and explore a solo script only instead the fullstack
``` ./bin/{pdepend|phpcbf|phpcpd|phpcs|phpdcd|phploc|phpmd} {options} {arguments} ```

i.e: ``` ./bin/phpcs path/to/yout/php/project --report=xml --report-file=phpcs-report.xml ```


## TODO
- Update phpqs to run phpmetrics
- Update phpqs to run Security Checker
- Implement OWASP_Code_Review_Project

## Inside
This script combines security and quality 100% fuelled by the following great applications:
- [pdepend](https://github.com/pdepend/pdepend) *"... shows you the quality of your design in the terms of extensibility, reusability and maintainability ..."*
- [phpmd](https://github.com/phpmd/phpmd)  *"It takes a given PHP source code base and look for several potential problems within that source ..."*
- [phpcbf, phpcs](https://github.com/squizlabs/PHP_CodeSniffer)  *"PHP_CodeSniffer tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards."*
- [phpcpd](https://github.com/sebastianbergmann/phpcpd)  *"Copy/Paste Detector (CPD) for PHP code."*
- [phpdcd](https://github.com/sebastianbergmann/phpdcd)  *"It scans a PHP project for all declared functions and methods and reports those as being "dead code" that are not called at least once."*
- [phploc](https://github.com/sebastianbergmann/phploc)  *"A tool for quickly measuring the size of a PHP project."*
