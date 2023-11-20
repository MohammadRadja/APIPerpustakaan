'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("peminjaman","IDBuku",{
      type: Sequelize.INTEGER,
      references: {
        model: "buku",
        key: "IDBuku"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("peminjaman","IDBuku");
  },
};
