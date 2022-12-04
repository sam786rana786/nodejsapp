// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Sms_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Department
      * ------------------------------------
      */
    class Department extends Sequelize.Model{}
    Department.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      short_name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "department", timestamps: false }
    );



    /**
      * ------------------------------------
      * Designation
      * ------------------------------------
      */
    class Designation extends Sequelize.Model{}
    Designation.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      title: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      designation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "designation", timestamps: false }
    );



    /**
      * ------------------------------------
      * Staff
      * ------------------------------------
      */
    class Staff extends Sequelize.Model{}
    Staff.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      address: {
        type: Sequelize.STRING
      },
      
      bank_account_name: {
        type: Sequelize.STRING
      },
      
      bank_account_no: {
        type: Sequelize.STRING
      },
      
      bank_name: {
        type: Sequelize.STRING
      },
      
      basic_salary: {
        type: Sequelize.STRING
      },
      
      casual_leave: {
        type: Sequelize.STRING
      },
      
      date_of_birth: {
        type: Sequelize.DATE
      },
      
      date_of_joining: {
        type: Sequelize.DATE
      },
      
      email: {
        type: Sequelize.STRING
      },
      
      epf_no: {
        type: Sequelize.STRING
      },
      
      experience: {
        type: Sequelize.STRING
      },
      
      father_name: {
        type: Sequelize.STRING
      },
      
      first_name: {
        type: Sequelize.STRING
      },
      
      full_name: {
        type: Sequelize.STRING
      },
      
      ifsc_code: {
        type: Sequelize.STRING
      },
      
      joining_letter: {
        type: Sequelize.STRING
      },
      
      last_name: {
        type: Sequelize.STRING
      },
      
      marital_status: {
        type: Sequelize.STRING
      },
      
      maternity_leave: {
        type: Sequelize.STRING
      },
      
      medical_leave: {
        type: Sequelize.STRING
      },
      
      mobile: {
        type: Sequelize.STRING
      },
      
      mother_name: {
        type: Sequelize.STRING
      },
      
      national_id: {
        type: Sequelize.STRING
      },
      
      other_document: {
        type: Sequelize.STRING
      },
      
      qualification: {
        type: Sequelize.STRING
      },
      
      resume: {
        type: Sequelize.STRING
      },
      
      staff_no: {
        type: Sequelize.INTEGER
      },
      
      staff_photo: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      department_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Department",
          key: '_id',
        },
      },
        
      designation_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Designation",
          key: '_id',
        },
      },
        
      gender_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "gender",
          key: '_id',
        },
      },
        
      religion_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "religion",
          key: '_id',
        },
      },
        
      role_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: '_id',
        },
      },
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
        
      user_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "staff", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      academic_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "academic_year",
          key: '_id',
        },
      },
        
      role_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: '_id',
        },
      },
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * academic_year
      * ------------------------------------
      */
    class academic_year extends Sequelize.Model{}
    academic_year.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      ending_date: {
        type: Sequelize.DATE
      },
      
      starting_date: {
        type: Sequelize.DATE
      },
      
      title: {
        type: Sequelize.STRING
      },
      
      year: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      academic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      academic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: section,
          key: '_id',
        }
      },
      academic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "academic_year", timestamps: false }
    );



    /**
      * ------------------------------------
      * blood_group
      * ------------------------------------
      */
    class blood_group extends Sequelize.Model{}
    blood_group.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      short_name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      blood_group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "blood_group", timestamps: false }
    );



    /**
      * ------------------------------------
      * classses
      * ------------------------------------
      */
    class classses extends Sequelize.Model{}
    classses.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      classs_id: {
        type: Sequelize.INTEGER,
        references: {
          model: section,
          key: '_id',
        }
      },
      classs_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "classses", timestamps: false }
    );



    /**
      * ------------------------------------
      * gender
      * ------------------------------------
      */
    class gender extends Sequelize.Model{}
    gender.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      short_name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      gender_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      gender_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "gender", timestamps: false }
    );



    /**
      * ------------------------------------
      * religion
      * ------------------------------------
      */
    class religion extends Sequelize.Model{}
    religion.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      short_name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      religion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      religion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "religion", timestamps: false }
    );



    /**
      * ------------------------------------
      * roles
      * ------------------------------------
      */
    class roles extends Sequelize.Model{}
    roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      type: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );



    /**
      * ------------------------------------
      * school
      * ------------------------------------
      */
    class school extends Sequelize.Model{}
    school.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      address: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      created_at: {
        type: Sequelize.DATE
      },
      
      domain: {
        type: Sequelize.STRING
      },
      
      email: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      ending_date: {
        type: Sequelize.DATE
      },
      
      is_enabled: {
        type: Sequelize.BOOLEAN
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      phone: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      school_code: {
        type: Sequelize.STRING
      },
      
      starting_date: {
        type: Sequelize.DATE
      },
      
      updated_at: {
        type: Sequelize.DATE
      },
      
      //RELATIONS
        
        
        
        
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: classses,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Department,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Designation,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: section,
          key: '_id',
        }
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "school", timestamps: false }
    );



    /**
      * ------------------------------------
      * section
      * ------------------------------------
      */
    class section extends Sequelize.Model{}
    section.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active_status: {
        type: Sequelize.BOOLEAN
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      academic_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "academic_year",
          key: '_id',
        },
      },
        
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "section", timestamps: false }
    );



    /**
      * ------------------------------------
      * student
      * ------------------------------------
      */
    class student extends Sequelize.Model{}
    student.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      address: {
        type: Sequelize.STRING
      },
      
      admission_date: {
        type: Sequelize.DATE
      },
      
      admission_no: {
        type: Sequelize.INTEGER
      },
      
      age: {
        type: Sequelize.STRING
      },
      
      birth_certificate: {
        type: Sequelize.STRING
      },
      
      caste: {
        type: Sequelize.STRING
      },
      
      date_of_birth: {
        type: Sequelize.DATE
      },
      
      email: {
        type: Sequelize.STRING
      },
      
      father_address: {
        type: Sequelize.STRING
      },
      
      father_email: {
        type: Sequelize.STRING
      },
      
      father_name: {
        type: Sequelize.STRING
      },
      
      father_occupation: {
        type: Sequelize.STRING
      },
      
      father_phone: {
        type: Sequelize.STRING
      },
      
      first_name: {
        type: Sequelize.STRING
      },
      
      height: {
        type: Sequelize.STRING
      },
      
      last_name: {
        type: Sequelize.STRING
      },
      
      mobile: {
        type: Sequelize.STRING
      },
      
      mother_address: {
        type: Sequelize.STRING
      },
      
      mother_email: {
        type: Sequelize.STRING
      },
      
      mother_name: {
        type: Sequelize.STRING
      },
      
      mother_occupation: {
        type: Sequelize.STRING
      },
      
      mother_phone: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      national_id: {
        type: Sequelize.STRING
      },
      
      national_id_no: {
        type: Sequelize.STRING
      },
      
      roll_no: {
        type: Sequelize.INTEGER
      },
      
      student_photo: {
        type: Sequelize.STRING
      },
      
      transfer_certificate: {
        type: Sequelize.STRING
      },
      
      weight: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      academic_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "academic_year",
          key: '_id',
        },
      },
        
      blood_group_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "blood_group",
          key: '_id',
        },
      },
        
      classs_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "classses",
          key: '_id',
        },
      },
        
      gender_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "gender",
          key: '_id',
        },
      },
        
      religion_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "religion",
          key: '_id',
        },
      },
        
      role_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: '_id',
        },
      },
        
      school_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "school",
          key: '_id',
        },
      },
        
      user_id:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "student", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
    
    
    
    
    
    
    
    
    section.belongsToMany(classses, {
        through: "section_classs_id",
        as: "classs_id",
        foreignKey: "id_section",
        otherKey: "id_classses",
        timestamps: false
    });

    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
