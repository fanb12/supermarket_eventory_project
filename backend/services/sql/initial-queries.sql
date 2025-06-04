-- Company tables 
CREATE TABLE IF NOT EXISTS `company_roles` (
  `company_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_role_name` varchar(255) NOT NULL,
  PRIMARY KEY (company_role_id),
  UNIQUE (company_role_name)
) ENGINE=InnoDB;
-- Employee tables 
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_hash` varchar(255) NOT NULL,
  `employee_email` varchar(255) NOT NULL,
  `active_employee` int(11) NOT NULL,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id), 
  UNIQUE (employee_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `employee_hash_id` (
  `employee_hashid` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `employee_hash` varchar(255) NOT NULL,
  PRIMARY KEY (employee_hashid),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `employee_info` (
  `employee_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_hash` varchar(255) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `employee_first_name` varchar(255) NOT NULL,
  `employee_last_name` varchar(255) NOT NULL,
  `employee_phone` varchar(255) NOT NULL,
  PRIMARY KEY (employee_info_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `employee_pass` (
  `employee_pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_hash` varchar(255) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `employee_password_hashed` varchar(255) NOT NULL,
  PRIMARY KEY (employee_pass_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `employee_role` (
  `employee_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_hash` varchar(255) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `company_role_id` int(11) NOT NULL,
  PRIMARY KEY (employee_role_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (company_role_id) REFERENCES company_roles(company_role_id)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `payment_ways` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_name` varchar(255) NOT NULL,
  PRIMARY KEY (payment_id),
  UNIQUE (payment_name)
) ENGINE=InnoDB;
--shop input
CREATE TABLE IF NOT EXISTS `shop_input_product` (
  `shop_input_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_input_name` varchar(255) NOT NULL,
  `shop_input_quantity` int(11) NOT NULL,
  `shop_input_code` int(11) NOT NULL,
  `shop_input_price` int(11) NOT NULL, 
  `input_hash` varchar(255) NOT NULL,
  `shop_description` TEXT,
  `shop_remark` TEXT,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (shop_input_id)
) ENGINE=InnoDB;
--shop output
CREATE TABLE IF NOT EXISTS `shop_output_product` (
  `shop_output_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_output_name` varchar(255) NOT NULL,
  `shop_output_code` int(11) NOT NULL,
  `shop_output_quantity` int(11) NOT NULL,
  `shop_output_price` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `shop_description` TEXT,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (shop_output_id)
   FOREIGN KEY (payment_id) REFERENCES payment_ways(payment_id),
) ENGINE=InnoDB;

--shop output


--store input
CREATE TABLE IF NOT EXISTS `store_input_product` (
  `store_input_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_input_name` varchar(255) NOT NULL,
  `store_input_quantity` int(11) NOT NULL,
  `store_input_code` int(11) NOT NULL,
  `store_input_price` int(11) NOT NULL,
   `store_hash` varchar(255) NOT NULL,
  `store_description` TEXT,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (store_input_id)
) ENGINE=InnoDB;
--production

CREATE TABLE IF NOT EXISTS `store_output_product` (
  `store_output_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_output_name` varchar(255) NOT NULL,
  `store_output_quantity` int(11) NOT NULL,
  `store_output_price` int(11) NOT NULL,
  `store_output_code` int(11) NOT NULL,
  
  `store_description` TEXT,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (store_output_id)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `product_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (category_id),
  UNIQUE (category)
) ENGINE=InnoDB;
-- Product tables
      
CREATE TABLE IF NOT EXISTS `product_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `image_price` int(11) NOT NULL,
  `image_description` TEXT,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES product_category(category_id)
  PRIMARY KEY (id)
) ENGINE=InnoDB;


INSERT INTO product_category (category) VALUES ('Produce'), ('Dairy & Refrigerated'), ('Meat & Seafood'), ('Bakery'),('Pantry'),('Frozen Foods'),('Beverages'),('Snacks'),('Health & Beauty'),('Household'),('Baby & Childcare'),('Pet Care');

-- Add the roles to the database 
INSERT INTO company_roles (company_role_name)
VALUES ('Employee'), ('Manager'), ('Admin');
-- add payment ways
INSERT INTO payment_ways (payment_name)
VALUES ('Transfer'), ('Cash');
-- This is the admin account 
INSERT INTO employee (employee_email, employee_hash, active_employee, added_date)
VALUES ('fantanesh@admin.com', '3QJekD4CfiLYWkxMQ8dSJeFm', 1, CURRENT_TIMESTAMP);

-- admin info
INSERT INTO employee_info (employee_id, employee_hash, employee_first_name, employee_last_name, employee_phone)
VALUES (1, '3QJekD4CfiLYWkxMQ8dSJeFm', 'Fantanesh', 'Bezabh', 555-555-5555); 

-- Password is 123456
INSERT INTO employee_pass (employee_id, employee_hash, employee_password_hashed)
VALUES (1, '3QJekD4CfiLYWkxMQ8dSJeFm', '$2b$10$3QJekD4CfiLYWkxMQ8dSJeFmYw32bHw43AZHKrNmyJIPuMWr0Fbqa');

INSERT INTO employee_role (employee_id, employee_hash, company_role_id)
VALUES (1, '3QJekD4CfiLYWkxMQ8dSJeFm', 3); 

INSERT INTO employee_hash_id (employee_id, employee_hash)
VALUES (1, '3QJekD4CfiLYWkxMQ8dSJeFm');