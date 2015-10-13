---
layout: post
title:  "Common commands"
date:   2014-12-09 15:08:46
categories: jekyll update
---
List of common commands that I come across ( I update this list periodically )

Error to install Nokogiri on OSX Yosemite
--------------

brew install libxml2 libxslt libiconv

Create mysql user and grant login access
--------------
CREATE USER ''@'%' IDENTIFIED BY '';
grant all privileges on *.* to @'localhost' IDENTIFIED by '' with grant option;

Storing session information in database in Rails
--------------
Add “gem activerecord-session_store” to Gemfile and run this command (rails generate active_record:session_migration) to create db tables
In session_store.rb change to active_record : Rails.application.config.session_store :active_record_store, key: 'kjsadkjad#$@#090(*&^#!@)'
do rake db:migrate after this

Building a jar with maven along with dependencies
--------------
Here is the answer that describes how to build a jar with maven [link](http://stackoverflow.com/questions/574594/how-can-i-create-an-executable-jar-with-dependencies-using-maven)