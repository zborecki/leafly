# Leafly - Core API

## Requirements
- Herd 1.30.1
- NodeJS 22.18.0
- PHP 8.5.10

## Installation
1. Install all dependencies using `composer install && npm i`.
2. Create the .env file from the example `cp .env.example .env`.
3. Generate the application key `php artisan key:generate` and configure the required environment variables in .env.
4. Run the database migrations `php artisan migrate`. If the project includes seeders and requires sample data `php artisan db:seed`.
5. This project uses Laravel Herd, so you do not need to run `php artisan serve`. Once Herd is running, the application is available at `http://leafly.test`.