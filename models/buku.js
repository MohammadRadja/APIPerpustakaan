'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      buku.hasMany(models.peminjaman,{
        as:"peminjaman",
        foreignKey:"IDBuku",
        onDelete: "CASCADE"
      });
    }
  }
  buku.init({
    IDBuku: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    JudulBuku: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Pengarang: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Kategori: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Penerbit: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Tahun: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};