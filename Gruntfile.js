module.exports = function(grunt) {

  grunt.initConfig({
  
  scorm_manifest: {
  	custom_options: {
    	options: {
       		version: '1.2', 
        	courseId: 'Actavo Creating Moments that Matter', 		//Organsisation ID
        	SCOtitle: 'Actavo Creating Moments that Matter', //Course Title 
        	moduleTitle: 'Actavo Creating Moments that Matter', 		//Module Title
        	launchPage: 'index.html',	//First page
        	path: './'				//Export directory
    	},
    	files: [{
        	        expand: true,       
            	    cwd: './',
                	src: ['**/*.*'],
                	filter: 'isFile'
            	}],
		},
	}
  });

  grunt.loadNpmTasks('grunt-scorm-manifest');
  grunt.registerTask('default', ['scorm_manifest']);

};