'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peminjaman.belongsTo(models.buku,{
        as:"buku",
        foreignKey:"IDBuku"
      });

      peminjaman.belongsTo(models.anggota, {
        foreignKey: "IDAnggota",
        as: "anggota",
      });
    }
  }
  peminjaman.init({
    JudulBuku: {
      allowNull: false,
      type: DataTypes.STRING
    },
    TanggalPinjam: {
      allowNull: false,
      type: DataTypes.DATE
    },
    TanggalKembali:{
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'peminjaman',
  });
  return peminjaman;
};