# Cryptify
A simple node CLI for encrypting and decrypting files with a secret.

## Why?
I needed an easy way to share a file of secrets.

## Installation
* Clone Repo `git clone git@github.com:mweslander/cryptify.git`
* Change Directory `cd cryptify`
* Link `npm link`

## Usage
* Encrypt `cryptify sanity-check.txt SomethingSuperSecretNotLikeThis`
  * Make sure it's jumbled `cat sanity-check.zip`
* Decrypt `cryptify sanity-check.zip SomethingSuperSecretNotLikeThis decrypt`
  * Make sure you don't get any diff output `diff sanity-check.txt sanity-checkDELETE.txt`

## IRL
As long as you and your buddy have cryptify installed, you could:
1. cryptify your sensitive file with a secret
2. send the encrypted zip file in an email
3. tell your secret to your buddy
4. bam. they have the sensitive file
