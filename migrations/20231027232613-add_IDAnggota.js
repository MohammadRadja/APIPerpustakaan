'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("peminjaman","IDAnggota",{
      type: Sequelize.INTEGER,
      references: {
        model: "anggota",
        key: "IDAnggota"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("anggota","IDAnggota");
  },
};
