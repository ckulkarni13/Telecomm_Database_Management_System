-- Create database
CREATE DATABASE DMDDFinalProject;

-- Use the above database, to work on it
USE DMDDFinalProject;
GO



-- Create Tables in Database
CREATE TABLE ServiceProvider (
 Service_Provider_ID VARCHAR(5) PRIMARY KEY,
 Phone_Number VARCHAR(20) NOT NULL,
);


CREATE TABLE Device (
 Device_id VARCHAR(5) PRIMARY KEY,
 Device_Model VARCHAR(10) NOT NULL,
 Device_Use VARCHAR(50) NOT NULL,
 Device_Cost FLOAT,
 Service_Provider_ID VARCHAR(5),
 FOREIGN KEY (Service_Provider_ID) REFERENCES ServiceProvider(Service_Provider_ID)
);


CREATE TABLE Plans (
 Plan_ID VARCHAR(5) PRIMARY KEY,
 Plan_Name VARCHAR(100) NOT NULL,
 Minutes_Limit VARCHAR(100),
 SMS_Limit VARCHAR(100),
 Free_Data_Limit VARCHAR(100),
 Benefits VARCHAR(100),
 Service_Provider_ID VARCHAR(5),
 FOREIGN KEY (Service_Provider_ID) REFERENCES ServiceProvider(Service_Provider_ID)
);


CREATE TABLE Service (
 Service_ID VARCHAR(5) PRIMARY KEY,
 Service_Type VARCHAR(100) NOT NULL,
 Cost_Of_Service FLOAT NOT NULL
);



CREATE TABLE ServiceSubscription (
 Subscription_ID VARCHAR(5) PRIMARY KEY,
 Start_Date DATE,
 End_Date DATE,
 Plan_ID VARCHAR(5),
 FOREIGN KEY (Plan_ID) REFERENCES Plans(Plan_ID) ,
 Service_ID VARCHAR(5),
 FOREIGN KEY (Service_ID) REFERENCES Service(Service_ID)
);


CREATE TABLE CallRecord (
   CallRecordID VARCHAR(5) PRIMARY KEY,
   CallDuration INT,
   Timestamp_of_call DATETIME,
   CallType VARCHAR(50),
   Service_Provider_ID VARCHAR(5),
   FOREIGN KEY (Service_Provider_ID) REFERENCES ServiceProvider(Service_Provider_ID)
);

CREATE TABLE Location (
  Location_ID VARCHAR(5) PRIMARY KEY,
  Location_Name VARCHAR(50),
  Population INT,
);

CREATE TABLE Department (
   Department_ID VARCHAR(5) PRIMARY KEY,
   Department_Name VARCHAR(255) NOT NULL,
   Department_Contact_No VARCHAR(20)
);

CREATE TABLE Customer (
  Customer_ID VARCHAR(5) PRIMARY KEY,
  First_Name VARCHAR(50),
  Last_Name VARCHAR(50),
  Address VARCHAR(100),
  Date_of_Birth DATE,
  City VARCHAR(50),
  Location_ID VARCHAR(5),
   FOREIGN KEY (Location_ID) REFERENCES Location(Location_ID)
);


CREATE TABLE ServiceContract (
   Contract_ID VARCHAR(5) PRIMARY KEY,
   Start_Date DATE,
   End_Date DATE,
   Terms_And_Conditions TEXT,
   Service_Provider_ID VARCHAR(5),
   FOREIGN KEY (Service_Provider_ID) REFERENCES ServiceProvider(Service_Provider_ID),
   Customer_ID VARCHAR(5),
   FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID)
);

CREATE TABLE Billing (
  Billing_ID VARCHAR(5) PRIMARY KEY,
  Customer_ID VARCHAR(5),
  Plan_ID VARCHAR(5),
  Invoice_Number VARCHAR(50),
  Payment_Status VARCHAR(20),
  FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
  FOREIGN KEY (Plan_ID) REFERENCES Plans(Plan_ID)
);



CREATE TABLE Employee (
   Employee_ID VARCHAR(5) PRIMARY KEY,
   First_Name VARCHAR(255) NOT NULL,
   Last_Name VARCHAR(255) NOT NULL,
   Salary DECIMAL(10, 2),
   Location_ID VARCHAR(5),
   FOREIGN KEY (Location_ID) REFERENCES Location(Location_ID),
   Department_ID VARCHAR(5),
   FOREIGN KEY (Department_ID) REFERENCES Department(Department_ID)
);


CREATE TABLE Customer_Query (
   Customer_Query_ID VARCHAR(5) PRIMARY KEY,
  
 Query_Type VARCHAR(255) NOT NULL,
   Severity_of_Issue INT,
   Employee_ID VARCHAR(5),
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID)
);


