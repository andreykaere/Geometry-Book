#!/usr/bin/python3.7

from fileoperations import *


import os


COMMENT_DIALOG = '''
<div id="comment-background" role="alert">
	<div id="comment-window"> 
		<form>
			<!--
			<div id="username">
                <input type="text" name="">
			</div>
			-->
			<div id="comment-text">
				<textarea rows="5" cols="41" placeholder="Комментарий..."></textarea>
			</div>
            <div id="comment-buttons-panel">
				<div id="comment-submit-button">
					<input type="submit" value="Отправить" class="button">
				</div>
				<div id="comment-cancel-button">
					<input type="button" class="button" value="Отменить">
				</div>
			</div>
        </form>
	</div>
</div>
'''

COMMENT_LOAD = '</main>'

def paste_code(filename, html, place, script):
    new_html = html[:place] + script + html[place:]
    update_file(filename, new_html)


def implement_code(filename, script, get_place):
    html = read_file(filename)
    script_place = get_place(html)

    if script_place: 
        paste_code(filename, 
                   html, 
                   script_place, 
                   script)


def get_comment_load_line(html):
    return html.find(COMMENT_LOAD)


def add_comment_dialog(path_to_file):
    implement_code(path_to_file,
                   COMMENT_DIALOG,
                   get_comment_load_line)


def main():
    path = "../book"
    html_files = get_all_html_files(path)

    for path_to_file, filename in html_files:
        add_comment_dialog(path_to_file)

main()
