#!/bin/bash
#I want to be sure it won't cause problems. So uncomment below when you are ready. First, you need to have the list of sections. I copied this into a temporary file.
# Then  Igenerated a list of numbers in Python, then pasted the numbers into one column, and the names of sections into another column in libreoffice. Then, I
#copied that, and pasted into a text file, saving as file-list.txt. Then, I replaced all tabs by -, and all spaces by - and saved the the file.

##00 first make the directories

#while IFS= read -r line; do
#    mkdir $line;
#done < "file-list.txt"

#0 make the file file-list-limited.txt
# when I first make a new section, I could just use file-list.txt. But I don't want to overwrite ones I've already done

#1 remove beginning numbers and dash. there will at least 1 digit. Maybe 2. Use extended regular expressions.
#sed -E 's/^[0-9]([0-9])*-//g' file-list.txt > file-list-limited-no-beginning-nums.txt
#
# #2 change all to lowercase
#sed -e 's/\(.*\)/\L\1/' file-list-limited-no-beginning-nums.txt > file-list-limited-no-beginning-nums-all-lowercase.txt
#
# #3
# # since they have different names use this slightly complicated script
# # code.js is a blank template I made for doing all challenges
# # about.txt is a template I made for putting in the information learned
#ending=".js";
#paste -d@ file-list.txt file-list-limited-no-beginning-nums-all-lowercase.txt | while IFS="@" read -r f1 f2
#do
#cp code.js $f1/$f2$ending
#cp about.txt $f1
#done

#you can also delete the unnecessary generated text files
#rm file-list-limited-no-beginning-nums.txt file-list-limited-no-beginning-nums-all-lowercase.txt
