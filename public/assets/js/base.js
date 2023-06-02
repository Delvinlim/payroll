function sidebar(){
    const toggle = document.getElementById('sidebar-toggle')
    const sidebar = document.getElementById('sidebar')
    toggle.addEventListener('click', function(event){
        sidebar.classList.toggle('d-sm-block')
    }, {once:true})
};

function annualCount() {
    let amountInput = document.getElementById("salaryAmount").value;
    
    values = amountInput.value * 12
    document.getElementById('salaryAnnual').value = values
  }

$(document).ready(function () {
    // For datatables in settings
    $('#allowance_table').DataTable();
    $('#bonus_table').DataTable();
    $('#deduction_table').DataTable();
    $('#department_table').DataTable();
    $('#position_table').DataTable();
    $('#payment_table').DataTable();
    $('#salary_table').DataTable();
    $('#webdata_table').DataTable();

    $('.updateAllowance').on('click', function(){
        var allowance_id = $(this).data('id')
        var allowance_name = $(this).data('name')
        var allowance_description = $(this).data('description');
        $('#allowanceId').val(allowance_id);
        $('#allowanceName').val(allowance_name);
        $('#allowanceDescription').val(allowance_description);
    });
    $('.deleteAllowance').on('click', function(){
        var allowance_id = $(this).data('id')
        $('#allowanceid').val(allowance_id);
    });

    $('.updateBonus').on('click', function(){
        var bonus_id = $(this).data('id')
        var bonus_name = $(this).data('name')
        var bonus_description = $(this).data('description');
        $('#bonusId').val(bonus_id);
        $('#bonusName').val(bonus_name);
        $('#bonusDescription').val(bonus_description);
    });
    $('.deleteBonus').on('click', function(){
        var bonus_id = $(this).data('id')
        $('#bonusid').val(bonus_id);
    });

    $('.updateDeduction').on('click', function(){
        var deduction_id = $(this).data('id')
        var deduction_name = $(this).data('name')
        var deduction_description = $(this).data('description');
        $('#deductionId').val(deduction_id);
        $('#deductionName').val(deduction_name);
        $('#deductionDescription').val(deduction_description);
    });
    $('.deleteDeduction').on('click', function(){
        var bonus_id = $(this).data('id')
        $('#deductionid').val(deduction_id);
    });

    $('.updateDepartment').on('click', function(){
        var department_id = $(this).data('id')
        var department_name = $(this).data('name')
        var department_contact = $(this).data('contact');
        var department_vision = $(this).data('vision');
        var department_mission = $(this).data('mission');
        $('#departmentId').val(department_id);
        $('#departmentName').val(department_name);
        $('#departmentContact').val(department_contact);
        $('#departmentVision').val(department_vision);
        $('#departmentMission').val(department_mission);
    });
    $('.deleteDepartment').on('click', function(){
        var department_id = $(this).data('id')
        $('#departmentid').val(department_id);
    });

    $('.updatePosition').on('click', function(){
        var position_id = $(this).data('id')
        var position_name = $(this).data('name')
        var position_department = $(this).data('department');
        var position_description = $(this).data('description');
        var position_salaryStart = $(this).data('start');
        var position_salaryEnd = $(this).data('end');
        console.log(position_id,position_name,position_description,position_department, position_salaryStart,position_salaryEnd)
        $('#positionId').val(position_id);
        $('#positionName').val(position_name);
        $('#positionDepartment').val(position_department);
        $('#positionDescription').val(position_description);
        $('#positionSalaryStart').val(position_salaryStart);
        $('#positionSalaryEnd').val(position_salaryEnd);
    });
    $('.deletePosition').on('click', function(){
        var position_id = $(this).data('id')
        console.log(position_id)
        $('#positionid').val(position_id);
    });

    $('.updatePaymentMethod').on('click', function(){
        var paymentMethod_id = $(this).data('id')
        var paymentMethod_name = $(this).data('name')
        var paymentMethod_number = $(this).data('number');
        var paymentMethod_description = $(this).data('description');
        $('#paymentMethodId').val(paymentMethod_id);
        $('#paymentMethodName').val(paymentMethod_name);
        $('#paymentMethodNumber').val(paymentMethod_number);
        $('#paymentMethodDescription').val(paymentMethod_description);
    });
    $('.deletePaymentMethod').on('click', function(){
        var paymentMethod_id = $(this).data('id')
        $('#paymentMethodid').val(paymentMethod_id);
    });

    $('.updateSalary').on('click', function(){
        var salary_id = $(this).data('id')
        var salary_position = $(this).data('name')
        var salary_amount = $(this).data('amount');
        var salary_annual = $(this).data('annual');
        $('#salaryId').val(salary_id);
        $('#salaryPositionId').val(salary_position);
        $('#salaryAmount').val(salary_amount);
        $('#salaryAnnual').val(salary_annual);
    });
    $('.deleteSalary').on('click', function(){
        var salary_id = $(this).data('id')
        $('#salaryid').val(salary_id);
    });
});