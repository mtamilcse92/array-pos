/**
 * HierarchyController
 *
 * @description :: Server-side logic for managing hierarchies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `HierarchyController.craete()`
     */
    craete: function(req, res) {
        Hierarchy.craete(req.params.all(), function(err, craete) {
            if (err) {
                return res.send(err, 500); }
            res.json(craete);
        });
    },


    /**
     * `HierarchyController.show()`
     */
    show: function(req, res) {
        Hierarchy.find(function(err, found) {
            if (err) {
                return res.send(err, 500); }
            res.json(found);
        });
    },


    /**
     * `HierarchyController.update()`
     */
    update: function(req, res) {
      Hierarchy.update(req.param('id'),req.params.all(),function(err, updated) {
            if (err) {
                return res.send(err, 500); }
            res.json(updated);
        });
    },


    /**
     * `HierarchyController.destroy()`
     */
    destroy: function(req, res) {
        Hierarchy.update(req.param('id'),function(err, success) {
            if (err) {
                return res.send(err, 500); }
            res.json("deleted");
        });
    }
};
