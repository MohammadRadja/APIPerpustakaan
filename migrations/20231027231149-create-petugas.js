'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username sudah di gunakan",
        },
        // Memastikan username hanya mengandung huruf dan angka
        isAlphanumeric: {
          args: true,
          msg: "Username harus mengandung huruf dan angka!"
        },
        // Memastikan panjang username tidak boleh boleh kurang dari 8 karakter
        min: {
          args: 8,
          msg: "Password minimal 8 karakter",
        },
    },
    Password: {
      allowNull: false,
      type: Sequelize.TEXT,
      validate: {
          is: {
              args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              // Validasi yang memerlukan setidaknya 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.
              msg: "Password memerlukan setidaknya 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus!"
          },
      },
  },
  isAdmin: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: false,
},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('petugas');
  }
};