source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.0'

gem 'rails',      '6.0.2.1'
gem 'bootstrap-sass', '~> 3.4', '>= 3.4.1'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 6.0'
gem 'webpacker', '~> 4.2', '>= 4.2.2'
gem 'turbolinks', '~> 5.2', '>= 5.2.1'
gem 'jbuilder', '~> 2.10'
gem 'bootsnap',   '1.4.6', require: false
gem 'pry', git: 'https://github.com/pry/pry.git', ref: '272b3290b5250d28ee82a5ff65aa3b29b825e37b'
gem 'bcrypt', '~> 3.1', '>= 3.1.13'


group :development, :test do
  gem 'sqlite3', '1.4.2'
  gem 'byebug',  '11.1.1', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console',           '4.0.1'
  gem 'listen', '~> 3.2', '>= 3.2.1'
  gem 'spring', '~> 2.1'
  gem 'spring-watcher-listen', '~> 2.0', '>= 2.0.1'
end

group :test do
  gem 'capybara', '~> 3.31'
  gem 'selenium-webdriver', '~> 3.142', '>= 3.142.7'
  gem 'webdrivers', '~> 4.2'
  gem 'rails-controller-testing', '~> 1.0', '>= 1.0.4'
  gem 'minitest', '~> 5.14'
  gem 'minitest-reporters', '~> 1.4', '>= 1.4.2'
  gem 'guard', '~> 2.16', '>= 2.16.1'
  gem 'guard-minitest', '~> 2.4', '>= 2.4.6'
end

group :production do
  gem 'pg', '~> 1.2', '>= 1.2.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
