-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name FROM users ORDER BY last_name;



-- Exercise 4
select id, user_id, image_url from posts where id=26;



-- Exercise 5
select id, image_url, user_id from posts where user_id=26 or user_id=12;



-- Exercise 6
select count(id) from posts;



-- Exercise 7
select user_id, count(caption) from posts group by user_id order by count(caption) desc;



-- Exercise 8
select posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name from posts inner join users on users.id = posts.user_id where posts.user_id=26 or posts.user_id=12;


-- Exercise 9
select posts.id, posts.pub_date, following.following_id from posts inner join following on following.following_id = posts.user_id where following.user_id = 26;



-- Exercise 10




-- Exercise 11
insert into bookmarks(user_id, post_id) values (26, 219);
insert into bookmarks(user_id, post_id) values (26, 220);
insert into bookmarks(user_id, post_id) values (26, 221);



-- Exercise 12
delete from bookmarks where post_id=219;
delete from bookmarks where post_id=220;
delete from bookmarks where post_id=221;



-- Exercise 13
update users set email='cyoung2022@gmail.com' where id=26;



-- Exercise 14
