'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buku', {
      IDBuku: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JudulBuku: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Pengarang: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Kategori: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Penerbit: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Tahun: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('buku');
  }
};