// Click on Register Button
let empId = 1000;
$('#employee-form').submit(function(event) {

    // to Prevent the form Submission
    event.preventDefault();

    let employee = {
        empId : empId,
        employeeName : $('#emp_name').val(),
        employeeAge : $('#emp_age').val(),
        employeeDesg : $('#emp_desg').val(),
        jobLocation : $('#job_location').val()
    };
    empId++;
    displayEmployee(employee);
    clearFormFields();

});

// display Employee
let displayEmployee = (employee) => {
    let tableRow = `<tr>
                        <td>${employee.empId}</td>
                        <td>${employee.employeeName}</td>
                        <td>${employee.employeeAge}</td>
                        <td>${employee.employeeDesg}</td>
                        <td>${employee.jobLocation}</td>
                   </tr>`;
    $('#table_body').append(tableRow);
};

// clear form data
let clearFormFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#job_location').val('');
};