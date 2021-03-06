lmsApp.factory("authorService", function($http, authorConstants) {
	return {
		getAllAuthorsService : function() {
			var getAuthorData = {};
			return $http({
				url : authorConstants.GET_ALL_AUTHORS_URL
			}).success(function(data) {
				getAuthorData = data;
			}).then(function() {
				return getAuthorData;
			})
		},

		getAuthorByPKService: function(authorId){
			var getAuthorByPkData = {};
			return $http({
				url: authorConstants.GET_AUTHOR_BY_PK_URL+authorId
			}).success(function(data){
				getAuthorByPkData = data;
			}).then(function(){
				return getAuthorByPkData;
				
			})
		}, 
		
		getInitAuthorService: function(){
			var getAuthorData = {};
			return $http({
				url: authorConstants.GET_AUTHOR_INIT_URL
			}).success(function(data){
				getAuthorData = data;
			}).then(function(){
				return getAuthorData;
			})
		},
		
		addAuthorService: function(author){
			return $http({
				url: authorConstants.ADD_AUTHOR_URL,
				method: "POST",
				data: author
			})
		},
		
		updateAuthorService: function(author){
			return $http({
				url: authorConstants.UPDATE_AUTHOR_URL,
				method: "POST",
				data: author
			})
		},
		
		deleteAuthorService: function(author){
			return $http({
				url: authorConstants.DELETE_AUTHOR_URL,
				method: "POST",
				data: author
			})
		},
		
		searchAuthorByName: function(searchString){
			var getAuthorByPkData = {};
			return $http({
				url: authorConstants.SEARCH_AUTHORS_URL+searchString
			}).success(function(data){
				getAuthorByPkData = data;
			}).then(function(){
				return getAuthorByPkData;
			})
		}
	}
})