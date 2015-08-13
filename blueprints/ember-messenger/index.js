'use strict';

module.exports = {
    afterInstall: function () {
        return this.addBowerPackageToProject('messenger');
    }
};
