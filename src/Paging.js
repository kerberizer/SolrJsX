(function (Solr, a$) {
  Solr.Paging = function (obj) {
    a$.extend(true, this, obj);
    this.manager = null;
    this.parameter = null;
  };
  
  Solr.Paging.prototype = {
    multivalue: false,      // If this filter allows multiple values
    exclusion: false,       // Whether to exclude THIS field from filtering from itself.
    onFilter: null,         // Invoked everytime an actual filter change happens. 
                            // If null or `true` is returned - the request is initiated.
    
    /** Make the initial setup of the manager for this faceting skill (field, exclusion, etc.)
      */
    init: function () {
      
    },
    
    /** Make the actual filtering. If `onFilter` returns `true` or is not defined at all -
      * initiates a request.
      */
    doFilter: function (value) {
      // TODO: Add/set parameter based on the field, multivalue, exclusion, etc.
    }
  };
  
})(Solr, a$);
