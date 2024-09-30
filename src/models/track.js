'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Track extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Track.init(
        {
            courseId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Track',
        },
    );
    return Track;
};
