-- Insert Data in the respective tables.
INSERT INTO Department (Department_ID, Department_Name, Department_Contact_No) VALUES
('D001', 'Customer Service', '1234567890'),
('D002', 'Technical Support', '1234567891'),
('D003', 'Human Resources', '1234567892'),
('D004', 'Research and Development', '1234567893'),
('D005', 'Sales and Marketing', '1234567894'),
('D006', 'Information Technology', '1234567895'),
('D007', 'Finance', '1234567896'),
('D008', 'Legal Department', '1234567897'),
('D009', 'Product Development', '1234567898'),
('D010', 'Operations', '1234567899'),
('D011', 'Network Infrastructure', '1234567800'),
('D012', 'Public Relations', '1234567801'),
('D013', 'Education and Training', '1234567802'),
('D014', 'Logistics', '1234567803'),
('D015', 'Compliance', '1234567804');


INSERT INTO Location (Location_ID, Location_Name, Population) VALUES
('L001', 'Downtown', 120000),
('L002', 'Midtown', 85000),
('L003', 'Uptown', 95000),
('L004', 'Eastside', 70000),
('L005', 'Westside', 73000),
('L006', 'Old Town', 68000),
('L007', 'New Town', 78000),
('L008', 'Northend', 54000),
('L009', 'Southside', 46000),
('L010', 'Riverside', 58000),
('L011', 'Lakeside', 63000),
('L012', 'Industrial District', 22000),
('L013', 'Central', 105000),
('L014', 'Suburban', 88000),
('L015', 'Countryside', 20000);


INSERT INTO Employee (Employee_ID, First_Name, Last_Name, Salary, Location_ID, Department_ID) VALUES
('E001', 'Alice', 'Johnson', 70000, 'L001', 'D001'),
('E002', 'Bob', 'Smith', 72000, 'L002', 'D002'),
('E003', 'Charlie', 'Brown', 68000, 'L003', 'D003'),
('E004', 'David', 'Wilson', 65000, 'L004', 'D004'),
('E005', 'Ella', 'Martinez', 71000, 'L005', 'D005'),
('E006', 'Frank', 'Thomas', 75000, 'L006', 'D006'),
('E007', 'Grace', 'Lee', 78000, 'L007', 'D007'),
('E008', 'Henry', 'Perez', 62000, 'L008', 'D008'),
('E009', 'Isabel', 'White', 64000, 'L009', 'D009'),
('E010', 'Jack', 'Harris', 69000, 'L010', 'D010'),
('E011', 'Katie', 'Clark', 73000, 'L011', 'D011'),
('E012', 'Luis', 'Rodriguez', 76000, 'L012', 'D012'),
('E013', 'Megan', 'Lopez', 67000, 'L013', 'D013'),
('E014', 'Nathan', 'Hill', 74000, 'L014', 'D014'),
('E015', 'Olivia', 'Sanchez', 79000, 'L015', 'D015');


INSERT INTO Customer (Customer_ID, First_Name, Last_Name, Address, Date_of_Birth, City, Location_ID) VALUES
('C001', 'John', 'Doe', '123 Maple Street', '1980-01-15', 'Springfield','L001'),
('C002', 'Jane', 'Smith', '456 Oak Street', '1990-02-20', 'Shelbyville','L002'),
('C003', 'Jim', 'Johnson', '789 Pine Street', '1985-03-25', 'Ogdenville','L003'),
('C004', 'Lisa', 'Williams', '321 Birch Avenue', '1975-04-30', 'North Haverbrook','L004'),
('C005', 'Mark', 'Brown', '654 Cedar Road', '1982-05-05', 'Capital City','L005'),
('C006', 'Emily', 'Jones', '987 Elm Lane', '1995-06-10', 'West Springfield','L006'),
('C007', 'Gary', 'Miller', '135 Maple Court', '1970-07-15', 'East Springfield','L007'),
('C008', 'Olivia', 'Davis', '246 Oak Circle', '1998-08-20', 'South Springfield','L008'),
('C009', 'Frank', 'Garcia', '369 Pine Way', '1983-09-25', 'Monroe','L009'),
('C010', 'Sophia', 'Martinez', '852 Birch Place', '1992-10-30', 'Shelbyville','L010'),
('C011', 'Ethan', 'Wilson', '741 Cedar Street', '1978-11-05', 'North Haverbrook','L011'),
('C012', 'Chloe', 'Anderson', '963 Elm Road', '2001-12-10', 'Capital City','L012'),
('C013', 'Ryan', 'Thomas', '159 Maple Boulevard', '1999-01-15', 'West Springfield','L013'),
('C014', 'Isabella', 'Jackson', '268 Oak Avenue', '2002-02-20', 'East Springfield','L014'),
('C015', 'Mason', 'White', '357 Pine Street', '2000-03-25', 'South Springfield', 'L015');

INSERT INTO Customer_Query (Customer_Query_ID, Employee_ID, Query_Type, Severity_of_Issue) VALUES
('Q001', 'E001', 'Billing Issue', 3),
('Q002', 'E002', 'Technical Support', 2),
('Q003', 'E003', 'Service Outage', 4),
('Q004', 'E004', 'Account Inquiry', 1),
('Q005', 'E005', 'Payment Processing', 3),
('Q006', 'E006', 'Plan Upgrade', 2),
('Q007', 'E007', 'Network Problem', 4),
('Q008', 'E008', 'Service Cancellation', 1),
('Q009', 'E009', 'Roaming Charges', 3),
('Q010', 'E010', 'Data Usage', 2),
('Q011', 'E011', 'Device Support', 4),
('Q012', 'E012', 'Account Suspension', 1),
('Q013', 'E013', 'Late Payment', 3),
('Q014', 'E014', 'Service Activation', 2),
('Q015', 'E015', 'Technical Glitch', 4);

INSERT INTO Service (Service_ID, Service_Type, Cost_Of_Service) VALUES
('S001', 'Internet Basic', 29.99),
('S002', 'Internet Premium', 49.99),
('S003', 'Mobile Basic', 19.99),
('S004', 'Mobile Premium', 39.99),
('S005', 'Cable TV Basic', 24.99),
('S006', 'Cable TV Premium', 44.99),
('S007', 'Landline', 15.99),
('S008', 'Cloud Storage Small', 9.99),
('S009', 'Cloud Storage Large', 19.99),
('S010', 'VPN Service', 5.99),
('S011', 'Device Insurance', 7.99),
('S012', 'Home Security', 29.99),
('S013', 'Streaming Service Basic', 8.99),
('S014', 'Streaming Service Premium', 16.99),
('S015', 'Gaming Network Access', 12.99);

INSERT INTO Device (Device_id, Device_Model, Device_Use, Device_Cost, Service_Provider_ID) VALUES
('DV01', 'ModelA', 'Router', 99.99, 'SP01'),
('DV02', 'ModelB', 'Modem', 79.99, 'SP02'),
('DV03', 'ModelC', 'Switch', 49.99, 'SP03'),
('DV04', 'ModelD', 'Smartphone', 299.99, 'SP01'),
('DV05', 'ModelE', 'Tablet', 199.99, 'SP02'),
('DV06', 'ModelF', 'Laptop', 499.99, 'SP03'),
('DV07', 'ModelG', 'Smartwatch', 199.99, 'SP01'),
('DV08', 'ModelH', 'Fitness Tracker', 99.99, 'SP02'),
('DV09', 'ModelI', 'Wireless Charger', 29.99, 'SP03'),
('DV10', 'ModelJ', 'Bluetooth Speaker', 59.99, 'SP01'),
('DV11', 'ModelK', 'Virtual Reality Headset', 399.99, 'SP02'),
('DV12', 'ModelL', 'Gaming Console', 299.99, 'SP03'),
('DV13', 'ModelM', 'E-Reader', 129.99, 'SP01'),
('DV14', 'ModelN', 'Portable WiFi', 89.99, 'SP02'),
('DV15', 'ModelO', 'Smart Home Hub', 149.99, 'SP03');


INSERT INTO Plans (Plan_ID, Plan_Name, Minutes_Limit, SMS_Limit, Free_Data_Limit, Benefits, Service_Provider_ID) VALUES
('PL01', 'Basic Plan', '500', '300', '1GB', 'Basic support', 'SP01'),
('PL02', 'Premium Plan', '1000', 'Unlimited', '5GB', 'Premium support', 'SP02'),
('PL03', 'Pro Plan', 'Unlimited', 'Unlimited', '10GB', 'Pro support', 'SP03'),
('PL04', 'Starter Plan', '300', '200', '500MB', 'Starter support', 'SP04'),
('PL05', 'Advanced Plan', '750', '500', '2GB', 'Advanced support', 'SP05'),
('PL06', 'Elite Plan', 'Unlimited', 'Unlimited', '15GB', 'Elite support', 'SP06'),
('PL07', 'Student Plan', '400', '400', '3GB', 'Student support', 'SP07'),
('PL08', 'Family Plan', '1200', 'Unlimited', '8GB', 'Family support', 'SP08'),
('PL09', 'Solo Plan', '200', '100', '1GB', 'Solo support', 'SP09'),
('PL10', 'Traveler Plan', '600', '300', '3GB', 'Traveler support', 'SP10'),
('PL11', 'Work Plan', 'Unlimited', 'Unlimited', '20GB', 'Work support', 'SP11'),
('PL12', 'Lite Plan', '250', '150', '500MB', 'Lite support', 'SP12'),
('PL13', 'Max Plan', 'Unlimited', 'Unlimited', '25GB', 'Max support', 'SP13'),
('PL14', 'Business Plan', '1500', 'Unlimited', '10GB', 'Business support', 'SP14'),
('PL15', 'Economy Plan', '100', '50', '250MB', 'Economy support', 'SP15');

INSERT INTO ServiceSubscription (Subscription_ID, Start_Date, End_Date, Plan_ID, Service_ID) VALUES
('SS01', '2024-01-01', '2024-12-31', 'PL01', 'S001'),
('SS02', '2024-02-01', '2025-01-31', 'PL02', 'S002'),
('SS03', '2024-03-01', '2024-12-31', 'PL03', 'S003'),
('SS04', '2024-04-01', '2025-03-31', 'PL04', 'S004'),
('SS05', '2024-05-01', '2025-04-30', 'PL05', 'S005'),
('SS06', '2024-06-01', '2025-05-31', 'PL06', 'S006'),
('SS07', '2024-07-01', '2025-06-30', 'PL07', 'S007'),
('SS08', '2024-08-01', '2025-07-31', 'PL08', 'S008'),
('SS09', '2024-09-01', '2025-08-31', 'PL09', 'S009'),
('SS10', '2024-10-01', '2025-09-30', 'PL10', 'S010'),
('SS11', '2024-11-01', '2025-10-31', 'PL11', 'S011'),
('SS12', '2024-12-01', '2025-11-30', 'PL12', 'S012'),
('SS13', '2024-01-15', '2025-01-14', 'PL13', 'S013'),
('SS14', '2024-02-15', '2025-02-14', 'PL14', 'S014'),
('SS15', '2024-03-15', '2025-03-14', 'PL15', 'S015');

INSERT INTO ServiceContract (Contract_ID, Service_Provider_ID, Customer_ID, Start_Date, End_Date, Terms_And_Conditions) VALUES
(101, 'SP01', 'C001', '2024-01-01', '2025-01-01', 'Term 1'),
(102, 'SP02', 'C002', '2024-02-01', '2025-02-01', 'Term 2'),
(103, 'SP03', 'C003', '2024-03-01', '2025-03-01', 'Term 3'),
(104, 'SP04', 'C004', '2024-04-01', '2025-04-01', 'Term 4'),
(105, 'SP05', 'C005', '2024-05-01', '2025-05-01', 'Term 5'),
(106, 'SP06', 'C006', '2024-06-01', '2025-06-01', 'Term 6'),
(107, 'SP07', 'C007', '2024-07-01', '2025-07-01', 'Term 7'),
(108, 'SP08', 'C008', '2024-08-01', '2025-08-01', 'Term 8'),
(109, 'SP09', 'C009', '2024-09-01', '2025-09-01', 'Term 9'),
(110, 'SP10', 'C010', '2024-10-01', '2025-10-01', 'Term 10'),
(111, 'SP11', 'C011', '2024-11-01', '2025-11-01', 'Term 11'),
(112, 'SP12', 'C012', '2024-12-01', '2025-12-01', 'Term 12'),
(113, 'SP13', 'C013', '2024-01-15', '2025-01-15', 'Term 13'),
(114, 'SP14', 'C014', '2024-02-15', '2025-02-15', 'Term 14'),
(115, 'SP15', 'C015', '2024-03-15', '2025-03-15', 'Term 15');

INSERT INTO Billing (Billing_ID, Customer_ID, Plan_ID, Invoice_Number, Payment_Status) VALUES
(1001, 'C001', 'PL01', 'INV0001', 'Paid'),
(1002, 'C002', 'PL02', 'INV0002', 'Unpaid'),
(1003, 'C003', 'PL03', 'INV0003', 'Paid'),
(1004, 'C004', 'PL04', 'INV0004', 'Unpaid'),
(1005, 'C005', 'PL05', 'INV0005', 'Paid'),
(1006, 'C006', 'PL06', 'INV0006', 'Unpaid'),
(1007, 'C007', 'PL07', 'INV0007', 'Paid'),
(1008, 'C008', 'PL08', 'INV0008', 'Unpaid'),
(1009, 'C009', 'PL09', 'INV0009', 'Paid'),
(1010, 'C010', 'PL10', 'INV0010', 'Unpaid'),
(1011, 'C011', 'PL11', 'INV0011', 'Paid'),
(1012, 'C012', 'PL12', 'INV0012', 'Unpaid'),
(1013, 'C013', 'PL13', 'INV0013', 'Paid'),
(1014, 'C014', 'PL14', 'INV0014', 'Unpaid'),
(1015, 'C015', 'PL15', 'INV0015', 'Paid');


INSERT INTO ServiceProvider (Service_Provider_ID, Phone_Number) VALUES
('SP01', '800-100-5001'),
('SP02', '800-100-5002'),
('SP03', '800-100-5003'),
('SP04', '800-100-5004'),
('SP05', '800-100-5005'),
('SP06', '800-100-5006'),
('SP07', '800-100-5007'),
('SP08', '800-100-5008'),
('SP09', '800-100-5009'),
('SP10', '800-100-5010'),
('SP11', '800-100-5011'),
('SP12', '800-100-5012'),
('SP13', '800-100-5013'),
('SP14', '800-100-5014'),
('SP15', '800-100-5015');


INSERT INTO CallRecord (CallRecordID, Service_Provider_ID, CallDuration, Timestamp_of_call, CallType)
VALUES
('CR01', 'SP01', 120, '2023-11-25 08:00:00', 'Incoming'),
('CR02', 'SP02', 90, '2023-11-25 09:30:00', 'Outgoing'),
('CR03', 'SP03', 150, '2023-11-25 10:45:00', 'Incoming'),
('CR04', 'SP04', 180, '2023-11-25 12:15:00', 'Outgoing'),
('CR05', 'SP05', 60, '2023-11-25 14:00:00', 'Incoming'),
('CR06', 'SP06', 45, '2023-11-25 15:30:00', 'Outgoing'),
('CR07', 'SP07', 100, '2023-11-25 16:45:00', 'Incoming'),
('CR08', 'SP08', 130, '2023-11-25 18:00:00', 'Outgoing'),
('CR09', 'SP09', 80, '2023-11-25 19:30:00', 'Incoming'),
('CR10', 'SP10', 110, '2023-11-25 21:00:00', 'Outgoing'),
('CR11', 'SP11', 95, '2023-11-25 22:15:00', 'Incoming'),
('CR12', 'SP12', 75, '2023-11-25 23:30:00', 'Outgoing'),
('CR13', 'SP13', 140, '2023-11-26 01:00:00', 'Incoming'),
('CR14', 'SP14', 170, '2023-11-26 02:30:00', 'Outgoing'),
('CR15', 'SP15', 55, '2023-11-26 04:00:00', 'Incoming');


SELECT * FROM ServiceProvider;
SELECT * FROM Device;
SELECT * FROM Plans;
SELECT * FROM Billing;
SELECT * FROM Service;
SELECT * FROM ServiceContract; 
SELECT * FROM ServiceSubscription;
SELECT * FROM CallRecord;
SELECT * FROM Employee;
SELECT * FROM Customer;
SELECT * FROM Customer_Query;
SELECT * FROM Location;
SELECT * FROM Department;