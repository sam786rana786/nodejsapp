--
-- Database: `sms_db`
--

CREATE DATABASE IF NOT EXISTS `sms_db`;
USE `sms_db`;


-- ENTITIES

--
-- Struttura della tabella `department`
--

CREATE TABLE IF NOT EXISTS `department` (
	`active_status` bool ,
	`name` varchar(130) ,
	`short_name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `designation`
--

CREATE TABLE IF NOT EXISTS `designation` (
	`active_status` bool ,
	`title` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `staff`
--

CREATE TABLE IF NOT EXISTS `staff` (
	`address` varchar(130) ,
	`bank_account_name` varchar(130) ,
	`bank_account_no` varchar(130) ,
	`bank_name` varchar(130) ,
	`basic_salary` varchar(130) ,
	`casual_leave` varchar(130) ,
	`date_of_birth` date ,
	`date_of_joining` date ,
	`email` varchar(130) ,
	`epf_no` varchar(130) ,
	`experience` varchar(130) ,
	`father_name` varchar(130) ,
	`first_name` varchar(130) ,
	`full_name` varchar(130) ,
	`ifsc_code` varchar(130) ,
	`joining_letter` varchar(130) ,
	`last_name` varchar(130) ,
	`marital_status` varchar(130) ,
	`maternity_leave` varchar(130) ,
	`medical_leave` varchar(130) ,
	`mobile` varchar(130) ,
	`mother_name` varchar(130) ,
	`national_id` varchar(130) ,
	`other_document` varchar(130) ,
	`qualification` varchar(130) ,
	`resume` varchar(130) ,
	`staff_no` int ,
	`staff_photo` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `sms_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `sms_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `academic_year`
--

CREATE TABLE IF NOT EXISTS `academic_year` (
	`active_status` bool ,
	`ending_date` date ,
	`starting_date` date ,
	`title` varchar(130) ,
	`year` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `blood_group`
--

CREATE TABLE IF NOT EXISTS `blood_group` (
	`name` varchar(130) ,
	`short_name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `classses`
--

CREATE TABLE IF NOT EXISTS `classses` (
	`active_status` bool ,
	`name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `gender`
--

CREATE TABLE IF NOT EXISTS `gender` (
	`name` varchar(130) ,
	`short_name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `religion`
--

CREATE TABLE IF NOT EXISTS `religion` (
	`name` varchar(130) ,
	`short_name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
	`active_status` bool ,
	`name` varchar(130) ,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `school`
--

CREATE TABLE IF NOT EXISTS `school` (
	`active_status` bool ,
	`address` varchar(130)  NOT NULL,
	`created_at` date ,
	`domain` varchar(130) ,
	`email` varchar(130)  NOT NULL,
	`ending_date` date ,
	`is_enabled` bool ,
	`name` varchar(130)  NOT NULL,
	`phone` varchar(130)  NOT NULL,
	`school_code` varchar(130) ,
	`starting_date` date ,
	`updated_at` date ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `section`
--

CREATE TABLE IF NOT EXISTS `section` (
	`active_status` bool ,
	`name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`address` varchar(130) ,
	`admission_date` date ,
	`admission_no` int ,
	`age` varchar(130) ,
	`birth_certificate` varchar(130) ,
	`caste` varchar(130) ,
	`date_of_birth` date ,
	`email` varchar(130) ,
	`father_address` varchar(130) ,
	`father_email` varchar(130) ,
	`father_name` varchar(130) ,
	`father_occupation` varchar(130) ,
	`father_phone` varchar(130) ,
	`first_name` varchar(130) ,
	`height` varchar(130) ,
	`last_name` varchar(130) ,
	`mobile` varchar(130) ,
	`mother_address` varchar(130) ,
	`mother_email` varchar(130) ,
	`mother_name` varchar(130) ,
	`mother_occupation` varchar(130) ,
	`mother_phone` varchar(130) ,
	`name` varchar(130) ,
	`national_id` varchar(130) ,
	`national_id_no` varchar(130) ,
	`roll_no` int ,
	`student_photo` varchar(130) ,
	`transfer_certificate` varchar(130) ,
	`weight` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m school_id Department - school
ALTER TABLE `department` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m school_id Designation - school
ALTER TABLE `designation` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m department_id Staff - Department
ALTER TABLE `staff` ADD COLUMN `department_id` int(11)  REFERENCES department(_id);

-- relation 1:m designation_id Staff - Designation
ALTER TABLE `staff` ADD COLUMN `designation_id` int(11)  REFERENCES designation(_id);

-- relation 1:m gender_id Staff - gender
ALTER TABLE `staff` ADD COLUMN `gender_id` int(11)  REFERENCES gender(_id);

-- relation 1:m religion_id Staff - religion
ALTER TABLE `staff` ADD COLUMN `religion_id` int(11)  REFERENCES religion(_id);

-- relation 1:m role_id Staff - roles
ALTER TABLE `staff` ADD COLUMN `role_id` int(11)  REFERENCES roles(_id);

-- relation 1:m school_id Staff - school
ALTER TABLE `staff` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m user_id Staff - User
ALTER TABLE `staff` ADD COLUMN `user_id` int(11)  REFERENCES user(_id);

-- relation 1:m academic_id User - academic_year
ALTER TABLE `user` ADD COLUMN `academic_id` int(11)  REFERENCES academic_year(_id);

-- relation 1:m role_id User - roles
ALTER TABLE `user` ADD COLUMN `role_id` int(11)  REFERENCES roles(_id);

-- relation 1:m school_id User - school
ALTER TABLE `user` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m school_id classses - school
ALTER TABLE `classses` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m academic_id section - academic_year
ALTER TABLE `section` ADD COLUMN `academic_id` int(11)  REFERENCES academic_year(_id);

-- relation 1:m school_id section - school
ALTER TABLE `section` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation m:m classs_id section - classses
CREATE TABLE IF NOT EXISTS `section_classs_id` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_section` int(11)  NOT NULL REFERENCES section(_id),
    `id_classses` int(11)  NOT NULL REFERENCES classses(_id)
);

-- relation 1:m academic_id student - academic_year
ALTER TABLE `student` ADD COLUMN `academic_id` int(11)  REFERENCES academic_year(_id);

-- relation 1:m blood_group_id student - blood_group
ALTER TABLE `student` ADD COLUMN `blood_group_id` int(11)  REFERENCES blood_group(_id);

-- relation 1:m classs_id student - classses
ALTER TABLE `student` ADD COLUMN `classs_id` int(11)  REFERENCES classses(_id);

-- relation 1:m gender_id student - gender
ALTER TABLE `student` ADD COLUMN `gender_id` int(11)  REFERENCES gender(_id);

-- relation 1:m religion_id student - religion
ALTER TABLE `student` ADD COLUMN `religion_id` int(11)  REFERENCES religion(_id);

-- relation 1:m role_id student - roles
ALTER TABLE `student` ADD COLUMN `role_id` int(11)  REFERENCES roles(_id);

-- relation 1:m school_id student - school
ALTER TABLE `student` ADD COLUMN `school_id` int(11)  REFERENCES school(_id);

-- relation 1:m user_id student - User
ALTER TABLE `student` ADD COLUMN `user_id` int(11)  REFERENCES user(_id);


