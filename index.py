#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

var = cgi.FieldStorage()
command = var.getvalue("q")
output = subprocess.getoutput("sudo "+command)
print(output)
