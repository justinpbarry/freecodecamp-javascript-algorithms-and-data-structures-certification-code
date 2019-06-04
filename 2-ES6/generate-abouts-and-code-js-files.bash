#!/bin/bash
#0 make the file file-list-limited.txt
# when I first make a new section, I could just use file-list.txt. But I don't want to overwrite ones I've already done

#I want to be sure it won't cause problems. So uncommente below when you are ready.

#1 remove numbers
# sed 's/^[0-9][0-9]-//' file-list-limited.txt > file-list-limited-no-beginning-nums.txt
#
# #2 lowercase?
# sed -e 's/\(.*\)/\L\1/' file-list-limited-no-beginning-nums.txt > file-list-limited-no-beginning-nums-all-lowercase.txt
#
# #3
# # since they have different names use this slightly complicated script
# # code.js is a blank template I made for doing all challenges
# # about.txt is a template I made for putting in the information learned
# ending=".js";
# paste -d@ file-list-limited.txt file-list-limited-no-beginning-nums-all-lowercase.txt | while IFS="@" read -r f1 f2
# do
# 	cp code.js $f1/$f2$ending
# 	cp about.txt $f1
# done
