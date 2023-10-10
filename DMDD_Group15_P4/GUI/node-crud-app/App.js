const express = require('express');
const cors = require('cors');
const mysql = require('mssql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(cors());

// Configure MySQL connection
const config = {
    server: 'rahulbalakrishnadmdd.database.windows.net',
    user: 'rahulbalakrishna',
    password: 'Pavan1895@',
    database: 'DMDDFinalProject',
    port: 1433,
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
  }
  
  // Test the connection
  try{
    var poolConnection = mysql.connect(config);
    console.log("Reading rows from the Table...");
  }
  catch (err){
    console.error(err.message);
  }

  const pool = new mysql.ConnectionPool(config);
const poolConnect = pool.connect();
  

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Routes

// Create
app.post('/api/Customer', (req, res) => {
    const { Customer_ID, First_Name, Last_Name, Address, Date_of_Birth, City, Location_ID} = req.body;
    const query = `INSERT INTO Customer (Customer_ID, First_Name, Last_Name, Address, Date_of_Birth, City, Location_ID) VALUES ('${Customer_ID}', '${First_Name}' , '${Last_Name}', '${Address}',  '${Date_of_Birth}',  '${City}', '${Location_ID}')`;
  
    mysql.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error creating user');
        return;
      }
  
      res.status(201).send('User created successfully');
    });
  });

// Read all
app.get('/api/Customer', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Customer');
    // Check if the customer with the given ID exists
    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error retrieving customer: ' + err.stack);
    res.status(500).send('Error retrieving customer');
  }
});

// Read
app.get('/api/Customer/:id', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  const Customer_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Customer_ID', mysql.NVarChar(5), Customer_ID);

    const result = await request.query('SELECT * FROM Customer WHERE Customer_ID = @Customer_ID');

    // Check if the customer with the given ID exists
    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error retrieving customer: ' + err.stack);
    res.status(500).send('Error retrieving customer');
  }
});

// Update
app.put('/api/Customer/:id', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  const { First_Name, Last_Name, Address, Date_of_Birth, City, Location_ID } = req.body;
  const Customer_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('First_Name', mysql.NVarChar(50), First_Name);
    request.input('Last_Name', mysql.NVarChar(50), Last_Name);
    request.input('Address', mysql.NVarChar(100), Address);
    request.input('Date_of_Birth', mysql.Date, Date_of_Birth);
    request.input('City', mysql.NVarChar(50), City);
    request.input('Location_ID', mysql.NVarChar(5), Location_ID);
    request.input('Customer_ID', mysql.NVarChar(5), Customer_ID);

    const result = await request.query(`
      UPDATE Customer
      SET First_Name = @First_Name, Last_Name = @Last_Name, Address = @Address,
          Date_of_Birth = @Date_of_Birth, City = @City, Location_ID = @Location_ID
      WHERE Customer_ID = @Customer_ID
    `);

    // Check the result object for success or error information
    if (result.rowsAffected > 0) {
      res.json({ message: 'Customer updated successfully', id: Customer_ID });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error updating customer: ' + err.stack);
    res.status(500).send('Error updating customer');
  }
  
});

// Delete
app.delete('/api/Customer/:id', async (req, res) => {
  await poolConnect;
  const Customer_ID = req.params.id;
  try{
    const request = pool.request();
  request.input('customer_ID', mysql.VarChar(5), Customer_ID);
  const result = await request.query('DELETE FROM Customer WHERE Customer_ID = @customer_ID');
  if (result.rowsAffected > 0) {
    res.json({ message: 'Customer deleted successfully', id: Customer_ID });
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
  }catch(err){
    console.error('Error deleting user: ' + err.stack); 
      res.status(500).send('Error deleting user');
      return;
  }
  
});

// Create
app.post('/api/CustomerQuery', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  const { Customer_Query_ID, Query_Type, Severity_of_Issue, Employee_ID } = req.body;
  const query = `
    INSERT INTO Customer_Query (Customer_Query_ID, Query_Type, Severity_of_Issue, Employee_ID)
    VALUES ('${Customer_Query_ID}', '${Query_Type}', ${Severity_of_Issue}, '${Employee_ID}')
  `;

  try {
    const request = pool.request();
    const result = await request.query(query);

    if (result.rowsAffected > 0) {
      res.status(201).json({ message: 'Customer Query created successfully', id: Customer_Query_ID });
    } else {
      res.status(500).json({ message: 'Error creating Customer Query' });
    }
  } catch (err) {
    console.error('Error executing query:', err.stack);
    res.status(500).send('Error creating Customer Query');
  }
});

// Read all
app.get('/api/CustomerQuery', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Customer_Query');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Customer Queries not found' });
    }
  } catch (err) {
    console.error('Error retrieving Customer Queries: ' + err.stack);
    res.status(500).send('Error retrieving Customer Queries');
  }
});

// Read
app.get('/api/CustomerQuery/:id', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  const Customer_Query_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Customer_Query_ID', mysql.NVarChar(5), Customer_Query_ID);

    const result = await request.query('SELECT * FROM Customer_Query WHERE Customer_Query_ID = @Customer_Query_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Customer Query not found' });
    }
  } catch (err) {
    console.error('Error retrieving Customer Query: ' + err.stack);
    res.status(500).send('Error retrieving Customer Query');
  }
});

// Update
app.put('/api/CustomerQuery/:id', async (req, res) => {
  await poolConnect; // Ensure that the pool has been created before handling requests

  const { Query_Type, Severity_of_Issue, Employee_ID } = req.body;
  const Customer_Query_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Query_Type', mysql.NVarChar(255), Query_Type);
    request.input('Severity_of_Issue', mysql.Int, Severity_of_Issue);
    request.input('Employee_ID', mysql.NVarChar(5), Employee_ID);
    request.input('Customer_Query_ID', mysql.NVarChar(5), Customer_Query_ID);

    const result = await request.query(`
      UPDATE Customer_Query
      SET Query_Type = @Query_Type, Severity_of_Issue = @Severity_of_Issue, Employee_ID = @Employee_ID
      WHERE Customer_Query_ID = @Customer_Query_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Customer Query updated successfully', id: Customer_Query_ID });
    } else {
      res.status(404).json({ message: 'Customer Query not found' });
    }
  } catch (err) {
    console.error('Error updating Customer Query: ' + err.stack);
    res.status(500).send('Error updating Customer Query');
  }
});

// Delete
app.delete('/api/CustomerQuery/:id', async (req, res) => {
  await poolConnect;
  const Customer_Query_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('customer_Query_ID', mysql.VarChar(5), Customer_Query_ID);

    const result = await request.query('DELETE FROM Customer_Query WHERE Customer_Query_ID = @customer_Query_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Customer Query deleted successfully', id: Customer_Query_ID });
    } else {
      res.status(404).json({ message: 'Customer Query not found' });
    }
  } catch (err) {
    console.error('Error deleting Customer Query: ' + err.stack);
    res.status(500).send('Error deleting Customer Query');
  }
});

// Create
app.post('/api/Employee', async (req, res) => {
  const { Employee_ID, First_Name, Last_Name, Salary, Location_ID, Department_ID } = req.body;
  const query = `INSERT INTO Employee (Employee_ID, First_Name, Last_Name, Salary, Location_ID, Department_ID) VALUES ('${Employee_ID}', '${First_Name}', '${Last_Name}', ${Salary}, '${Location_ID}', '${Department_ID}')`;

  mysql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating employee');
      return;
    }

    res.status(201).send('Employee created successfully');
  });
});

// Read all
app.get('/api/Employee', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Employee');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error('Error retrieving employee: ' + err.stack);
    res.status(500).send('Error retrieving employee');
  }
});

// Read
app.get('/api/Employee/:id', async (req, res) => {
  await poolConnect;

  const Employee_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Employee_ID', mysql.NVarChar(5), Employee_ID);

    const result = await request.query('SELECT * FROM Employee WHERE Employee_ID = @Employee_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error('Error retrieving employee: ' + err.stack);
    res.status(500).send('Error retrieving employee');
  }
});

// Update
app.put('/api/Employee/:id', async (req, res) => {
  await poolConnect;

  const { First_Name, Last_Name, Salary, Location_ID, Department_ID } = req.body;
  const Employee_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('First_Name', mysql.NVarChar(255), First_Name);
    request.input('Last_Name', mysql.NVarChar(255), Last_Name);
    request.input('Salary', mysql.Decimal(10, 2), Salary);
    request.input('Location_ID', mysql.NVarChar(5), Location_ID);
    request.input('Department_ID', mysql.NVarChar(5), Department_ID);
    request.input('Employee_ID', mysql.NVarChar(5), Employee_ID);

    const result = await request.query(`
      UPDATE Employee
      SET First_Name = @First_Name, Last_Name = @Last_Name, Salary = @Salary,
          Location_ID = @Location_ID, Department_ID = @Department_ID
      WHERE Employee_ID = @Employee_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Employee updated successfully', id: Employee_ID });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error('Error updating employee: ' + err.stack);
    res.status(500).send('Error updating employee');
  }
});

// Delete
app.delete('/api/Employee/:id', async (req, res) => {
  await poolConnect;
  const Employee_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('employee_ID', mysql.VarChar(5), Employee_ID);
    const result = await request.query('DELETE FROM Employee WHERE Employee_ID = @employee_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Employee deleted successfully', id: Employee_ID });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error('Error deleting employee: ' + err.stack);
    res.status(500).send('Error deleting employee');
  }
});


// Create
app.post('/api/Billing', async (req, res) => {
  await poolConnect;

  const { Billing_ID, Customer_ID, Plan_ID, Invoice_Number, Payment_Status } = req.body;
  const query = `
    INSERT INTO Billing (Billing_ID, Customer_ID, Plan_ID, Invoice_Number, Payment_Status)
    VALUES ('${Billing_ID}', '${Customer_ID}', '${Plan_ID}', '${Invoice_Number}', '${Payment_Status}')
  `;

  try {
    const request = pool.request();
    const result = await request.query(query);

    if (result.rowsAffected > 0) {
      res.status(201).json({ message: 'Billing record created successfully', id: Billing_ID });
    } else {
      res.status(500).send('Error creating billing record');
    }
  } catch (err) {
    console.error('Error executing query:', err.stack);
    res.status(500).send('Error creating billing record');
  }
});

// Read all
app.get('/api/Billing', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Billing');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Billing records not found' });
    }
  } catch (err) {
    console.error('Error retrieving billing records: ' + err.stack);
    res.status(500).send('Error retrieving billing records');
  }
});

//Read 
app.get('/api/Billing/:id', async (req, res) => {
  await poolConnect;

  const Billing_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Billing_ID', mysql.NVarChar(5), Billing_ID);

    const result = await request.query('SELECT * FROM Billing WHERE Billing_ID = @Billing_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Billing record not found' });
    }
  } catch (err) {
    console.error('Error retrieving billing record: ' + err.stack);
    res.status(500).send('Error retrieving billing record');
  }
});

// Update
app.put('/api/Billing/:id', async (req, res) => {
  await poolConnect;

  const { Customer_ID, Plan_ID, Invoice_Number, Payment_Status } = req.body;
  const Billing_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Customer_ID', mysql.NVarChar(5), Customer_ID);
    request.input('Plan_ID', mysql.NVarChar(5), Plan_ID);
    request.input('Invoice_Number', mysql.NVarChar(50), Invoice_Number);
    request.input('Payment_Status', mysql.NVarChar(20), Payment_Status);
    request.input('Billing_ID', mysql.NVarChar(5), Billing_ID);

    const result = await request.query(`
      UPDATE Billing
      SET Customer_ID = @Customer_ID, Plan_ID = @Plan_ID,
          Invoice_Number = @Invoice_Number, Payment_Status = @Payment_Status
      WHERE Billing_ID = @Billing_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Billing record updated successfully', id: Billing_ID });
    } else {
      res.status(404).json({ message: 'Billing record not found' });
    }
  } catch (err) {
    console.error('Error updating billing record: ' + err.stack);
    res.status(500).send('Error updating billing record');
  }
});

// Delete
app.delete('/api/Billing/:id', async (req, res) => {
  await poolConnect;

  const Billing_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('billing_ID', mysql.VarChar(5), Billing_ID);
    const result = await request.query('DELETE FROM Billing WHERE Billing_ID = @billing_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Billing record deleted successfully', id: Billing_ID });
    } else {
      res.status(404).json({ message: 'Billing record not found' });
    }
  } catch (err) {
    console.error('Error deleting billing record: ' + err.stack);
    res.status(500).send('Error deleting billing record');
  }
});

// Create
app.post('/api/ServiceContract', async (req, res) => {
  const { Contract_ID, Start_Date, End_Date, Terms_And_Conditions, Service_Provider_ID, Customer_ID } = req.body;
  const query = `
      INSERT INTO ServiceContract (Contract_ID, Start_Date, End_Date, Terms_And_Conditions, Service_Provider_ID, Customer_ID)
      VALUES ('${Contract_ID}', '${Start_Date}', '${End_Date}', '${Terms_And_Conditions}', '${Service_Provider_ID}', '${Customer_ID}')
  `;

  try {
      const request = pool.request();
      const result = await request.query(query);

      res.status(201).json({ message: 'ServiceContract created successfully', id: Contract_ID });
  } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating ServiceContract');
  }
});

// Read all
app.get('/api/ServiceContract', async (req, res) => {
  await poolConnect;

  try {
      const request = pool.request();
      const result = await request.query('SELECT * FROM ServiceContract');

      if (result.recordset.length > 0) {
          res.json(result.recordset);
      } else {
          res.status(404).json({ message: 'ServiceContracts not found' });
      }
  } catch (err) {
      console.error('Error retrieving ServiceContracts: ' + err.stack);
      res.status(500).send('Error retrieving ServiceContracts');
  }
});

// Read
app.get('/api/ServiceContract/:id', async (req, res) => {
  await poolConnect;

  const Contract_ID = req.params.id;

  try {
      const request = pool.request();
      request.input('Contract_ID', mysql.VarChar(5), Contract_ID);

      const result = await request.query('SELECT * FROM ServiceContract WHERE Contract_ID = @Contract_ID');

      if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
      } else {
          res.status(404).json({ message: 'ServiceContract not found' });
      }
  } catch (err) {
      console.error('Error retrieving ServiceContract: ' + err.stack);
      res.status(500).send('Error retrieving ServiceContract');
  }
});

// Update
app.put('/api/ServiceContract/:id', async (req, res) => {
  await poolConnect;

  const { Start_Date, End_Date, Terms_And_Conditions, Service_Provider_ID, Customer_ID } = req.body;
  const Contract_ID = req.params.id;

  try {
      const request = pool.request();
      request.input('Start_Date', mysql.Date, Start_Date);
      request.input('End_Date', mysql.Date, End_Date);
      request.input('Terms_And_Conditions', mysql.Text, Terms_And_Conditions);
      request.input('Service_Provider_ID', mysql.VarChar(5), Service_Provider_ID);
      request.input('Customer_ID', mysql.VarChar(5), Customer_ID);
      request.input('Contract_ID', mysql.VarChar(5), Contract_ID);

      const result = await request.query(`
          UPDATE ServiceContract
          SET Start_Date = @Start_Date, End_Date = @End_Date, Terms_And_Conditions = @Terms_And_Conditions,
              Service_Provider_ID = @Service_Provider_ID, Customer_ID = @Customer_ID
          WHERE Contract_ID = @Contract_ID
      `);

      if (result.rowsAffected > 0) {
          res.json({ message: 'ServiceContract updated successfully', id: Contract_ID });
      } else {
          res.status(404).json({ message: 'ServiceContract not found' });
      }
  } catch (err) {
      console.error('Error updating ServiceContract: ' + err.stack);
      res.status(500).send('Error updating ServiceContract');
  }
});

// Delete
app.delete('/api/ServiceContract/:id', async (req, res) => {
  await poolConnect;
  const Contract_ID = req.params.id;

  try {
      const request = pool.request();
      request.input('Contract_ID', mysql.VarChar(5), Contract_ID);

      const result = await request.query('DELETE FROM ServiceContract WHERE Contract_ID = @Contract_ID');

      if (result.rowsAffected > 0) {
          res.json({ message: 'ServiceContract deleted successfully', id: Contract_ID });
      } else {
          res.status(404).json({ message: 'ServiceContract not found' });
      }
  } catch (err) {
      console.error('Error deleting ServiceContract: ' + err.stack);
      res.status(500).send('Error deleting ServiceContract');
  }
});

// Create
app.post('/api/Department', async (req, res) => {
  const { Department_ID, Department_Name, Department_Contact_No } = req.body;
  const query = `
    INSERT INTO Department (Department_ID, Department_Name, Department_Contact_No)
    VALUES ('${Department_ID}', '${Department_Name}', '${Department_Contact_No}')
  `;

  mysql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating department');
      return;
    }

    res.status(201).send('Department created successfully');
  });
});

// Read all departments
app.get('/api/Department', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Department');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    console.error('Error retrieving departments: ' + err.stack);
    res.status(500).send('Error retrieving departments');
  }
});

// Read a specific department by ID
app.get('/api/Department/:id', async (req, res) => {
  await poolConnect;

  const Department_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Department_ID', mysql.NVarChar(5), Department_ID);

    const result = await request.query('SELECT * FROM Department WHERE Department_ID = @Department_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    console.error('Error retrieving department: ' + err.stack);
    res.status(500).send('Error retrieving department');
  }
});

// Update
app.put('/api/Department/:id', async (req, res) => {
  await poolConnect;

  const { Department_Name, Department_Contact_No } = req.body;
  const Department_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Department_Name', mysql.NVarChar(255), Department_Name);
    request.input('Department_Contact_No', mysql.NVarChar(20), Department_Contact_No);
    request.input('Department_ID', mysql.NVarChar(5), Department_ID);

    const result = await request.query(`
      UPDATE Department
      SET Department_Name = @Department_Name, Department_Contact_No = @Department_Contact_No
      WHERE Department_ID = @Department_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Department updated successfully', id: Department_ID });
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    console.error('Error updating department: ' + err.stack);
    res.status(500).send('Error updating department');
  }
});

// Delete
app.delete('/api/Department/:id', async (req, res) => {
  await poolConnect;

  const Department_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Department_ID', mysql.VarChar(5), Department_ID);

    const result = await request.query('DELETE FROM Department WHERE Department_ID = @Department_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Department deleted successfully', id: Department_ID });
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    console.error('Error deleting department: ' + err.stack);
    res.status(500).send('Error deleting department');
  }
});

// Create
app.post('/api/Location', async (req, res) => {
  const { Location_ID, Location_Name, Population } = req.body;
  const query = `
    INSERT INTO Location (Location_ID, Location_Name, Population)
    VALUES ('${Location_ID}', '${Location_Name}', ${Population})
  `;

  try {
    const request = pool.request();
    const result = await request.query(query);

    res.status(201).json({ message: 'Location created successfully', id: Location_ID });
  } catch (err) {
    console.error('Error creating location: ' + err.stack);
    res.status(500).send('Error creating location');
  }
});

// Read
app.get('/api/Location', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Location');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (err) {
    console.error('Error retrieving locations: ' + err.stack);
    res.status(500).send('Error retrieving locations');
  }
});

app.get('/api/Location/:id', async (req, res) => {
  await poolConnect;

  const Location_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Location_ID', mysql.NVarChar(5), Location_ID);

    const result = await request.query('SELECT * FROM Location WHERE Location_ID = @Location_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (err) {
    console.error('Error retrieving location: ' + err.stack);
    res.status(500).send('Error retrieving location');
  }
});

// Update
app.put('/api/Location/:id', async (req, res) => {
  await poolConnect;

  const { Location_Name, Population } = req.body;
  const Location_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Location_Name', mysql.NVarChar(50), Location_Name);
    request.input('Population', mysql.Int, Population);
    request.input('Location_ID', mysql.NVarChar(5), Location_ID);

    const result = await request.query(`
      UPDATE Location
      SET Location_Name = @Location_Name, Population = @Population
      WHERE Location_ID = @Location_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Location updated successfully', id: Location_ID });
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (err) {
    console.error('Error updating location: ' + err.stack);
    res.status(500).send('Error updating location');
  }
});

// Delete
app.delete('/api/Location/:id', async (req, res) => {
  await poolConnect;
  const Location_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('location_ID', mysql.VarChar(5), Location_ID);

    const result = await request.query('DELETE FROM Location WHERE Location_ID = @location_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Location deleted successfully', id: Location_ID });
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (err) {
    console.error('Error deleting location: ' + err.stack);
    res.status(500).send('Error deleting location');
  }
});


// Create
app.post('/api/CallRecord', async (req, res) => {
  const { CallRecordID, CallDuration, Timestamp_of_call, CallType, Service_Provider_ID } = req.body;
  const query = `
      INSERT INTO CallRecord (CallRecordID, CallDuration, Timestamp_of_call, CallType, Service_Provider_ID)
      VALUES ('${CallRecordID}', ${CallDuration}, '${Timestamp_of_call}', '${CallType}', '${Service_Provider_ID}')
  `;

  try {
      const request = pool.request();
      const result = await request.query(query);

      res.status(201).json({ message: 'CallRecord created successfully', id: CallRecordID });
  } catch (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error creating CallRecord');
  }
});

// Read
app.get('/api/CallRecord', async (req, res) => {
  await poolConnect;

  try {
      const request = pool.request();
      const result = await request.query('SELECT * FROM CallRecord');

      if (result.recordset.length > 0) {
          res.json(result.recordset);
      } else {
          res.status(404).json({ message: 'CallRecord not found' });
      }
  } catch (err) {
      console.error('Error retrieving CallRecord: ' + err.stack);
      res.status(500).send('Error retrieving CallRecord');
  }
});

app.get('/api/CallRecord/:id', async (req, res) => {
  await poolConnect;

  const CallRecordID = req.params.id;

  try {
      const request = pool.request();
      request.input('CallRecordID', mysql.NVarChar(5), CallRecordID);

      const result = await request.query('SELECT * FROM CallRecord WHERE CallRecordID = @CallRecordID');

      if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
      } else {
          res.status(404).json({ message: 'CallRecord not found' });
      }
  } catch (err) {
      console.error('Error retrieving CallRecord: ' + err.stack);
      res.status(500).send('Error retrieving CallRecord');
  }
});

// Update
app.put('/api/CallRecord/:id', async (req, res) => {
  await poolConnect;

  const { CallDuration, Timestamp_of_call, CallType, Service_Provider_ID } = req.body;
  const CallRecordID = req.params.id;

  try {
      const request = pool.request();
      request.input('CallDuration', mysql.Int, CallDuration);
      request.input('Timestamp_of_call', mysql.DateTime, Timestamp_of_call);
      request.input('CallType', mysql.NVarChar(50), CallType);
      request.input('Service_Provider_ID', mysql.NVarChar(5), Service_Provider_ID);
      request.input('CallRecordID', mysql.NVarChar(5), CallRecordID);

      const result = await request.query(`
          UPDATE CallRecord
          SET CallDuration = @CallDuration, Timestamp_of_call = @Timestamp_of_call,
              CallType = @CallType, Service_Provider_ID = @Service_Provider_ID
          WHERE CallRecordID = @CallRecordID
      `);

      if (result.rowsAffected > 0) {
          res.json({ message: 'CallRecord updated successfully', id: CallRecordID });
      } else {
          res.status(404).json({ message: 'CallRecord not found' });
      }
  } catch (err) {
      console.error('Error updating CallRecord: ' + err.stack);
      res.status(500).send('Error updating CallRecord');
  }
});

// Delete
app.delete('/api/CallRecord/:id', async (req, res) => {
  await poolConnect;
  const CallRecordID = req.params.id;

  try {
      const request = pool.request();
      request.input('CallRecordID', mysql.VarChar(5), CallRecordID);

      const result = await request.query('DELETE FROM CallRecord WHERE CallRecordID = @CallRecordID');

      if (result.rowsAffected > 0) {
          res.json({ message: 'CallRecord deleted successfully', id: CallRecordID });
      } else {
          res.status(404).json({ message: 'CallRecord not found' });
      }
  } catch (err) {
      console.error('Error deleting CallRecord: ' + err.stack);
      res.status(500).send('Error deleting CallRecord');
  }
});

// Create
app.post('/api/ServiceSubscription', async (req, res) => {
  await poolConnect;

  const { Subscription_ID, Start_Date, End_Date, Plan_ID, Service_ID } = req.body;
  const query = `
    INSERT INTO ServiceSubscription (Subscription_ID, Start_Date, End_Date, Plan_ID, Service_ID)
    VALUES ('${Subscription_ID}', '${Start_Date}', '${End_Date}', '${Plan_ID}', '${Service_ID}')
  `;

  try {
    const request = pool.request();
    const result = await request.query(query);

    if (result.rowsAffected > 0) {
      res.status(201).json({ message: 'ServiceSubscription created successfully', id: Subscription_ID });
    } else {
      res.status(500).send('Error creating ServiceSubscription');
    }
  } catch (err) {
    console.error('Error executing query:', err.stack);
    res.status(500).send('Error creating ServiceSubscription');
  }
});

// Read all
app.get('/api/ServiceSubscription', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM ServiceSubscription');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'ServiceSubscription not found' });
    }
  } catch (err) {
    console.error('Error retrieving ServiceSubscription: ' + err.stack);
    res.status(500).send('Error retrieving ServiceSubscription');
  }
});

// Read by ID
app.get('/api/ServiceSubscription/:id', async (req, res) => {
  await poolConnect;

  const Subscription_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Subscription_ID', mysql.VarChar(5), Subscription_ID);

    const result = await request.query('SELECT * FROM ServiceSubscription WHERE Subscription_ID = @Subscription_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'ServiceSubscription not found' });
    }
  } catch (err) {
    console.error('Error retrieving ServiceSubscription: ' + err.stack);
    res.status(500).send('Error retrieving ServiceSubscription');
  }
});

// Update
app.put('/api/ServiceSubscription/:id', async (req, res) => {
  await poolConnect;

  const { Start_Date, End_Date, Plan_ID, Service_ID } = req.body;
  const Subscription_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Start_Date', mysql.Date, Start_Date);
    request.input('End_Date', mysql.Date, End_Date);
    request.input('Plan_ID', mysql.VarChar(5), Plan_ID);
    request.input('Service_ID', mysql.VarChar(5), Service_ID);
    request.input('Subscription_ID', mysql.VarChar(5), Subscription_ID);

    const result = await request.query(`
      UPDATE ServiceSubscription
      SET Start_Date = @Start_Date, End_Date = @End_Date, Plan_ID = @Plan_ID, Service_ID = @Service_ID
      WHERE Subscription_ID = @Subscription_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'ServiceSubscription updated successfully', id: Subscription_ID });
    } else {
      res.status(404).json({ message: 'ServiceSubscription not found' });
    }
  } catch (err) {
    console.error('Error updating ServiceSubscription: ' + err.stack);
    res.status(500).send('Error updating ServiceSubscription');
  }
});

// Delete
app.delete('/api/ServiceSubscription/:id', async (req, res) => {
  await poolConnect;

  const Subscription_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Subscription_ID', mysql.VarChar(5), Subscription_ID);

    const result = await request.query('DELETE FROM ServiceSubscription WHERE Subscription_ID = @Subscription_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'ServiceSubscription deleted successfully', id: Subscription_ID });
    } else {
      res.status(404).json({ message: 'ServiceSubscription not found' });
    }
  } catch (err) {
    console.error('Error deleting ServiceSubscription: ' + err.stack);
    res.status(500).send('Error deleting ServiceSubscription');
  }
});

// Create
app.post('/api/Service', (req, res) => {
  const { Service_ID, Service_Type, Cost_Of_Service } = req.body;
  const query = `INSERT INTO Service (Service_ID, Service_Type, Cost_Of_Service) VALUES ('${Service_ID}', '${Service_Type}', ${Cost_Of_Service})`;

  mysql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating service');
      return;
    }

    res.status(201).send('Service created successfully');
  });
});

// Read
app.get('/api/Service', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Service');
    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    console.error('Error retrieving service: ' + err.stack);
    res.status(500).send('Error retrieving service');
  }
});

app.get('/api/Service/:id', async (req, res) => {
  await poolConnect;

  const Service_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Service_ID', mysql.VarChar(5), Service_ID);

    const result = await request.query('SELECT * FROM Service WHERE Service_ID = @Service_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    console.error('Error retrieving service: ' + err.stack);
    res.status(500).send('Error retrieving service');
  }
});

// Update
app.put('/api/Service/:id', async (req, res) => {
  await poolConnect;

  const { Service_Type, Cost_Of_Service } = req.body;
  const Service_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Service_Type', mysql.VarChar(100), Service_Type);
    request.input('Cost_Of_Service', mysql.Float, Cost_Of_Service);
    request.input('Service_ID', mysql.VarChar(5), Service_ID);

    const result = await request.query(`
      UPDATE Service
      SET Service_Type = @Service_Type, Cost_Of_Service = @Cost_Of_Service
      WHERE Service_ID = @Service_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Service updated successfully', id: Service_ID });
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    console.error('Error updating service: ' + err.stack);
    res.status(500).send('Error updating service');
  }
});

// Delete
app.delete('/api/Service/:id', async (req, res) => {
  await poolConnect;
  const Service_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('service_ID', mysql.VarChar(5), Service_ID);
    const result = await request.query('DELETE FROM Service WHERE Service_ID = @service_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Service deleted successfully', id: Service_ID });
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    console.error('Error deleting service: ' + err.stack);
    res.status(500).send('Error deleting service');
  }
});

// Create
app.post('/api/Plans', (req, res) => {
  const { Plan_ID, Plan_Name, Minutes_Limit, SMS_Limit, Free_Data_Limit, Benefits, Service_Provider_ID } = req.body;
  const query = `INSERT INTO Plans (Plan_ID, Plan_Name, Minutes_Limit, SMS_Limit, Free_Data_Limit, Benefits, Service_Provider_ID) VALUES ('${Plan_ID}', '${Plan_Name}', '${Minutes_Limit}', '${SMS_Limit}', '${Free_Data_Limit}', '${Benefits}', '${Service_Provider_ID}')`;

  mysql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating plan');
      return;
    }

    res.status(201).send('Plan created successfully');
  });
});

// Read
app.get('/api/Plans', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Plans');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Plans not found' });
    }
  } catch (err) {
    console.error('Error retrieving plans: ' + err.stack);
    res.status(500).send('Error retrieving plans');
  }
});

app.get('/api/Plans/:id', async (req, res) => {
  await poolConnect;

  const Plan_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Plan_ID', mysql.NVarChar(5), Plan_ID);

    const result = await request.query('SELECT * FROM Plans WHERE Plan_ID = @Plan_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (err) {
    console.error('Error retrieving plan: ' + err.stack);
    res.status(500).send('Error retrieving plan');
  }
});

// Update
app.put('/api/Plans/:id', async (req, res) => {
  await poolConnect;

  const { Plan_Name, Minutes_Limit, SMS_Limit, Free_Data_Limit, Benefits, Service_Provider_ID } = req.body;
  const Plan_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Plan_Name', mysql.NVarChar(100), Plan_Name);
    request.input('Minutes_Limit', mysql.NVarChar(100), Minutes_Limit);
    request.input('SMS_Limit', mysql.NVarChar(100), SMS_Limit);
    request.input('Free_Data_Limit', mysql.NVarChar(100), Free_Data_Limit);
    request.input('Benefits', mysql.NVarChar(100), Benefits);
    request.input('Service_Provider_ID', mysql.NVarChar(5), Service_Provider_ID);
    request.input('Plan_ID', mysql.NVarChar(5), Plan_ID);

    const result = await request.query(`
      UPDATE Plans
      SET Plan_Name = @Plan_Name, Minutes_Limit = @Minutes_Limit, SMS_Limit = @SMS_Limit,
          Free_Data_Limit = @Free_Data_Limit, Benefits = @Benefits, Service_Provider_ID = @Service_Provider_ID
      WHERE Plan_ID = @Plan_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Plan updated successfully', id: Plan_ID });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (err) {
    console.error('Error updating plan: ' + err.stack);
    res.status(500).send('Error updating plan');
  }
});

// Delete
app.delete('/api/Plans/:id', async (req, res) => {
  await poolConnect;
  const Plan_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('plan_ID', mysql.VarChar(5), Plan_ID);
    const result = await request.query('DELETE FROM Plans WHERE Plan_ID = @plan_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Plan deleted successfully', id: Plan_ID });
    } else {
      res.status(404).json({ message: 'Plan not found' });
    }
  } catch (err) {
    console.error('Error deleting plan: ' + err.stack);
    res.status(500).send('Error deleting plan');
  }
});

app.post('/api/Device', async (req, res) => {
  const { Device_id, Device_Model, Device_Use, Device_Cost, Service_Provider_ID } = req.body;
  const query = `
    INSERT INTO Device (Device_id, Device_Model, Device_Use, Device_Cost, Service_Provider_ID)
    VALUES ('${Device_id}', '${Device_Model}', '${Device_Use}', ${Device_Cost}, '${Service_Provider_ID}')
  `;

  try {
    const request = pool.request();
    const result = await request.query(query);

    res.status(201).json({ message: 'Device created successfully', id: Device_id });
  } catch (err) {
    console.error('Error creating device: ' + err.stack);
    res.status(500).send('Error creating device');
  }
});

app.get('/api/Device', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM Device');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Devices not found' });
    }
  } catch (err) {
    console.error('Error retrieving devices: ' + err.stack);
    res.status(500).send('Error retrieving devices');
  }
});

app.get('/api/Device/:id', async (req, res) => {
  await poolConnect;

  const Device_id = req.params.id;

  try {
    const request = pool.request();
    request.input('Device_id', mysql.NVarChar(5), Device_id);

    const result = await request.query('SELECT * FROM Device WHERE Device_id = @Device_id');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (err) {
    console.error('Error retrieving device: ' + err.stack);
    res.status(500).send('Error retrieving device');
  }
});

app.put('/api/Device/:id', async (req, res) => {
  await poolConnect;

  const { Device_Model, Device_Use, Device_Cost, Service_Provider_ID } = req.body;
  const Device_id = req.params.id;

  try {
    const request = pool.request();
    request.input('Device_Model', mysql.NVarChar(10), Device_Model);
    request.input('Device_Use', mysql.NVarChar(50), Device_Use);
    request.input('Device_Cost', mysql.Float, Device_Cost);
    request.input('Service_Provider_ID', mysql.NVarChar(5), Service_Provider_ID);
    request.input('Device_id', mysql.NVarChar(5), Device_id);

    const result = await request.query(`
      UPDATE Device
      SET Device_Model = @Device_Model, Device_Use = @Device_Use,
          Device_Cost = @Device_Cost, Service_Provider_ID = @Service_Provider_ID
      WHERE Device_id = @Device_id
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Device updated successfully', id: Device_id });
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (err) {
    console.error('Error updating device: ' + err.stack);
    res.status(500).send('Error updating device');
  }
});

app.delete('/api/Device/:id', async (req, res) => {
  await poolConnect;
  const Device_id = req.params.id;

  try {
    const request = pool.request();
    request.input('Device_id', mysql.VarChar(5), Device_id);

    const result = await request.query('DELETE FROM Device WHERE Device_id = @Device_id');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Device deleted successfully', id: Device_id });
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (err) {
    console.error('Error deleting device: ' + err.stack);
    res.status(500).send('Error deleting device');
  }
});

// Create
app.post('/api/ServiceProvider', async (req, res) => {
  const { Service_Provider_ID, Phone_Number } = req.body;
  const query = `INSERT INTO ServiceProvider (Service_Provider_ID, Phone_Number) VALUES ('${Service_Provider_ID}', '${Phone_Number}')`;

  mysql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error creating service provider');
      return;
    }

    res.status(201).send('Service provider created successfully');
  });
});

// Read
app.get('/api/ServiceProvider', async (req, res) => {
  await poolConnect;

  try {
    const request = pool.request();
    const result = await request.query('SELECT * FROM ServiceProvider');

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).json({ message: 'Service provider not found' });
    }
  } catch (err) {
    console.error('Error retrieving service provider: ' + err.stack);
    res.status(500).send('Error retrieving service provider');
  }
});

app.get('/api/ServiceProvider/:id', async (req, res) => {
  await poolConnect;

  const Service_Provider_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Service_Provider_ID', mysql.NVarChar(5), Service_Provider_ID);

    const result = await request.query('SELECT * FROM ServiceProvider WHERE Service_Provider_ID = @Service_Provider_ID');

    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: 'Service provider not found' });
    }
  } catch (err) {
    console.error('Error retrieving service provider: ' + err.stack);
    res.status(500).send('Error retrieving service provider');
  }
});

// Update
app.put('/api/ServiceProvider/:id', async (req, res) => {
  await poolConnect;

  const { Phone_Number } = req.body;
  const Service_Provider_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('Phone_Number', mysql.NVarChar(20), Phone_Number);
    request.input('Service_Provider_ID', mysql.NVarChar(5), Service_Provider_ID);

    const result = await request.query(`
      UPDATE ServiceProvider
      SET Phone_Number = @Phone_Number
      WHERE Service_Provider_ID = @Service_Provider_ID
    `);

    if (result.rowsAffected > 0) {
      res.json({ message: 'Service provider updated successfully', id: Service_Provider_ID });
    } else {
      res.status(404).json({ message: 'Service provider not found' });
    }
  } catch (err) {
    console.error('Error updating service provider: ' + err.stack);
    res.status(500).send('Error updating service provider');
  }
});

// Delete
app.delete('/api/ServiceProvider/:id', async (req, res) => {
  await poolConnect;
  const Service_Provider_ID = req.params.id;

  try {
    const request = pool.request();
    request.input('service_Provider_ID', mysql.VarChar(5), Service_Provider_ID);
    const result = await request.query('DELETE FROM ServiceProvider WHERE Service_Provider_ID = @service_Provider_ID');

    if (result.rowsAffected > 0) {
      res.json({ message: 'Service provider deleted successfully', id: Service_Provider_ID });
    } else {
      res.status(404).json({ message: 'Service provider not found' });
    }
  } catch (err) {
    console.error('Error deleting service provider: ' + err.stack);
    res.status(500).send('Error deleting service provider');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
