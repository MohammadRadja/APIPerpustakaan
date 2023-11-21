'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peminjaman', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JudulBuku: {
        type: Sequelize.STRING
      },
      TanggalPinjam: {
        type: Sequelize.DATE
      },
      TanggalKembali: {
        type: Sequelize.DATE
      },
      IDBuku: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "buku",
          key : "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
        IDAnggota: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "anggota",
            key : "id"
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('peminjaman');
  }
};