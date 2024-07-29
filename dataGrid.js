var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    // Static patient data
    $scope.patients = [
        { patientId: 'P001', displayName: 'John Doe', isDefault: false, age: 45, gender: 'Male', diagnosis: 'Hypertension', contactNumber: '555-1234' },
        { patientId: 'P002', displayName: 'Jane Smith', isDefault: true, age: 34, gender: 'Female', diagnosis: 'Diabetes', contactNumber: '555-5678' },
        { patientId: 'P003', displayName: 'Emily Johnson', isDefault: false, age: 29, gender: 'Female', diagnosis: 'Asthma', contactNumber: '555-8765' },
        { patientId: 'P004', displayName: 'Michael Brown', isDefault: false, age: 55, gender: 'Male', diagnosis: 'Chronic Bronchitis', contactNumber: '555-4321' },
        { patientId: 'P005', displayName: 'Linda Davis', isDefault: true, age: 62, gender: 'Female', diagnosis: 'Arthritis', contactNumber: '555-3456' },
        { patientId: 'P006', displayName: 'Robert Wilson', isDefault: false, age: 47, gender: 'Male', diagnosis: 'Heart Disease', contactNumber: '555-6543' },
        { patientId: 'P007', displayName: 'Sophia Moore', isDefault: true, age: 39, gender: 'Female', diagnosis: 'Migraines', contactNumber: '555-7890' },
        { patientId: 'P008', displayName: 'James Taylor', isDefault: false, age: 52, gender: 'Male', diagnosis: 'High Cholesterol', contactNumber: '555-2345' },
        { patientId: 'P009', displayName: 'Olivia Anderson', isDefault: false, age: 41, gender: 'Female', diagnosis: 'Fibromyalgia', contactNumber: '555-6789' },
        { patientId: 'P010', displayName: 'William Thomas', isDefault: true, age: 60, gender: 'Male', diagnosis: 'Sleep Apnea', contactNumber: '555-3456' }
    ];
    

    // Initialize DataTables after data is loaded
    $(document).ready(function() {
        $('#patientTable').DataTable({
            responsive: true
        });
    });
    
});
