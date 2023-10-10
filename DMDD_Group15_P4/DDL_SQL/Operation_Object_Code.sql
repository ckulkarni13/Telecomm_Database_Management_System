-- Stored Procedure 1st
CREATE PROCEDURE GetCustomerInfo
@customer_id VARCHAR(5),
@first_name VARCHAR(50) OUTPUT,
@last_name VARCHAR(50) OUTPUT,
@address VARCHAR(100) OUTPUT,
@city VARCHAR(50) OUTPUT
AS
BEGIN
   SELECT
      @first_name = First_Name,
      @last_name = Last_Name,
      @address = Address,
      @city = City
   FROM Customer
   WHERE Customer_ID = @customer_id;
END;

-- Declare variables for input and output parameters
DECLARE @CustomerID VARCHAR(5) = 'C001';
DECLARE @FirstName VARCHAR(50);
DECLARE @LastName VARCHAR(50);
DECLARE @CustomerAddress VARCHAR(100);  -- Renamed the variable to avoid conflicts
DECLARE @CustomerCity VARCHAR(50);

-- Execute the stored procedure
EXEC GetCustomerInfo
   @customer_id = @CustomerID,
   @first_name = @FirstName OUTPUT,
   @last_name = @LastName OUTPUT,
   @address = @CustomerAddress OUTPUT,
   @city = @CustomerCity OUTPUT;

-- Display the result
SELECT
   'Customer ID: ' + @CustomerID AS 'Input Parameter',
   'First Name: ' + ISNULL(@FirstName, 'N/A') AS 'First Name',
   'Last Name: ' + ISNULL(@LastName, 'N/A') AS 'Last Name',
   'Address: ' + ISNULL(@CustomerAddress, 'N/A') AS 'Address',
   'City: ' + ISNULL(@CustomerCity, 'N/A') AS 'City';*/

-- Stored Procedure 2nd
CREATE PROCEDURE GetBillingDetails
@invoice_number VARCHAR(50),
@customer_id VARCHAR(5) OUTPUT,
@plan_name VARCHAR(100) OUTPUT,
@payment_status VARCHAR(20) OUTPUT
AS
BEGIN
   SELECT
      @customer_id = c.Customer_ID,
      @plan_name = p.Plan_Name,
      @payment_status = b.Payment_Status
   FROM Billing b
   INNER JOIN Customer c ON b.Customer_ID = c.Customer_ID
   INNER JOIN Plans p ON b.Plan_ID = p.Plan_ID
   WHERE b.Invoice_Number = @invoice_number;
END;


-- Declare variables for input and output parameters
DECLARE @InvoiceNumber VARCHAR(50) = 'INV0001';
DECLARE @CustomerID VARCHAR(5);
DECLARE @PlanName VARCHAR(100);
DECLARE @PaymentStatus VARCHAR(20);

-- Execute the stored procedure
EXEC GetBillingDetails
   @invoice_number = @InvoiceNumber,
   @customer_id = @CustomerID OUTPUT,
   @plan_name = @PlanName OUTPUT,
   @payment_status = @PaymentStatus OUTPUT;

-- Display the result
SELECT
   'Invoice Number: ' + @InvoiceNumber AS 'Input Parameter',
   'Customer ID: ' + ISNULL(@CustomerID, 'N/A') AS 'Output Parameter',
   'Plan Name: ' + ISNULL(@PlanName, 'N/A') AS 'Output Parameter',
   'Payment Status: ' + ISNULL(@PaymentStatus, 'N/A') AS 'Output Parameter';*/


-- Stored Procedure 3rd
CREATE PROCEDURE UpdateEmployeeSalary
@employee_id VARCHAR(5),
@new_salary DECIMAL(10, 2),
@message VARCHAR(255) OUTPUT
AS
BEGIN
  UPDATE Employee
  SET Salary = @new_salary
  WHERE Employee_ID = @employee_id;


  IF @@ROWCOUNT > 0
     SET @message = 'Salary updated successfully.';
  ELSE
     SET @message = 'Employee not found.';
END;


DECLARE @outputMessage NVARCHAR(255);
EXEC UpdateEmployeeSalary 'E001', 80000.00, @message = @outputMessage OUTPUT;
PRINT @outputMessage;*/

-- Stored Procedure 4th
CREATE PROCEDURE CalculateEmployeeBonus
    @EmployeeID VARCHAR(5),
    @BonusPercentage DECIMAL(5, 2),
    @BonusAmount DECIMAL(10, 2) OUTPUT
AS
BEGIN
    DECLARE @EmployeeSalary DECIMAL(10, 2);

    -- Get the employee's salary
    SELECT @EmployeeSalary = Salary
    FROM Employee
    WHERE Employee_ID = @EmployeeID;

    -- Calculate the bonus
    SET @BonusAmount = @EmployeeSalary * (@BonusPercentage / 100);
END;

-- Declare variables for input and output parameters
DECLARE @employeeID VARCHAR(5) = 'E001';
DECLARE @bonusPercentage DECIMAL(5, 2) = 10;
DECLARE @bonusAmount DECIMAL(10, 2);

-- Execute the stored procedure
EXEC CalculateEmployeeBonus @employeeID, @bonusPercentage, @bonusAmount OUTPUT;

-- Display the calculated bonus
SELECT 'Bonus Amount: ' + CAST(@bonusAmount AS VARCHAR(20)) AS Result;


-- View 1st Code
CREATE VIEW CustomerBillingView AS
SELECT
   c.Customer_ID,
   c.First_Name,
   c.Last_Name,
   b.Invoice_Number,
   b.Payment_Status
FROM Customer c
INNER JOIN Billing b ON c.Customer_ID = b.Customer_ID;

SELECT * FROM CustomerBillingView;



-- View 2nd Code
CREATE VIEW EmployeeDepartmentView AS
SELECT
   e.Employee_ID,
   e.First_Name,
   e.Last_Name,
   d.Department_Name
FROM Employee e
INNER JOIN Department d ON e.Department_ID = d.Department_ID;

SELECT * FROM EmployeeDepartmentView;

-- View 3rd Code
CREATE VIEW ServiceSubscriptionDetailsView AS
SELECT
   ss.Subscription_ID,
   ss.Start_Date,
   ss.End_Date,
   p.Plan_Name,
   s.Service_Type
FROM ServiceSubscription ss
INNER JOIN Plans p ON ss.Plan_ID = p.Plan_ID
INNER JOIN Service s ON ss.Service_ID = s.Service_ID;

SELECT * FROM ServiceSubscriptionDetailsView;

-- View 4th Code
CREATE VIEW EmployeeLocationView AS
SELECT
    E.Employee_ID,
    E.First_Name,
    E.Last_Name,
    E.Salary,
    L.Location_Name,
    L.Population
FROM
    Employee E
INNER JOIN
    Location L ON E.Location_ID = L.Location_ID;

SELECT * FROM EmployeeLocationView;

-- Trigger Created Code
CREATE TRIGGER UpdateServiceSubscription
ON ServiceSubscription
AFTER UPDATE
AS
BEGIN
   -- Trigger logic to perform actions after updating ServiceSubscription table
   -- Example: Logging the update in an audit table
   INSERT INTO ServiceSubscriptionAudit (Subscription_ID, Updated_At)
   SELECT Subscription_ID, GETDATE()
   FROM INSERTED;
END;

-- Check Constraints on 3 tables named (Customer, ServiceSubscription, Location)
ALTER TABLE Customer
ADD CONSTRAINT CheckAgeConstraint CHECK (DATEDIFF(YEAR, Date_of_Birth, GETDATE()) >= 18);


ALTER TABLE ServiceSubscription
ADD CONSTRAINT CheckEndDateConstraint CHECK (End_Date > Start_Date);


ALTER TABLE Location
ADD CONSTRAINT CheckPopulationConstraint CHECK (Population >= 0);


CREATE FUNCTION dbo.CalculateDiscount
(
    @InvoiceAmount DECIMAL(10, 2)
)
RETURNS DECIMAL(5, 2)
AS
BEGIN
    DECLARE @Discount DECIMAL(5, 2);

    -- Example discount calculation logic: 10% discount for amounts greater than 100
    IF @InvoiceAmount > 100
        SET @Discount = 0.10 * @Invoice_Amount;
    ELSE
        SET @Discount = 0;

    RETURN @Discount;
END;

ALTER TABLE Billing
ADD Invoice_Amount FLOAT;

UPDATE Billing
SET Invoice_Amount = RAND() * 1000; 

ALTER TABLE Billing
ADD Discount AS dbo.CalculateDiscount(Invoice_Amount);

SELECT * , Discount
FROM Billing;


-- Data Encrption on Cutomer Table on Customer_ID
CREATE SYMMETRIC KEY Customer_IDKey
WITH ALGORITHM = AES_256
ENCRYPTION BY PASSWORD = 'DMDD123';

ALTER TABLE Customer
ADD EncryptedCustomer_ID VARBINARY(MAX);

OPEN SYMMETRIC KEY Customer_IDKey
DECRYPTION BY PASSWORD = 'DMDD123';

UPDATE Customer
SET EncryptedCustomer_ID = ENCRYPTBYKEY(KEY_GUID('Customer_IDKey'), CONVERT(VARBINARY(MAX), Customer_ID));

CLOSE SYMMETRIC KEY Customer_IDKey;


SELECT * FROM Customer;


-- 3 Non-Clustered Indexing Code.
CREATE NONCLUSTERED INDEX IX_Customer_LastName
ON Customer(Last_Name);


CREATE NONCLUSTERED INDEX IX_Employee_DepartmentID
ON Employee(Department_ID);



CREATE NONCLUSTERED INDEX IX_Billing_PlanID
ON Billing(Plan_ID);

