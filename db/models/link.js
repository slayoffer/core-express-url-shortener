const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Link.init({
    short_link: DataTypes.STRING,
    long_link: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,
      },
    },
    clicks: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Link',
  });
  return Link;
};
