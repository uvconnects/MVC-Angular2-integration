/**

 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
        'npm:': 'node_modules/',
        "ng2-bootstrap": "node_modules/ng2-bootstrap",
         "moment":   "moment/moment"
    },
  

    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
        'ng2-datetime-picker': 'npm:ng2-datetime-picker/dist',
        '@progress/kendo-angular-buttons': 'npm:@progress/kendo-angular-buttons',
        '@progress/kendo-angular-grid': 'npm:@progress/kendo-angular-grid',
        '@progress/kendo-angular-intl': 'npm:@progress/kendo-angular-intl',
        '@progress/kendo-dropdowns-common': 'npm:@telerik/kendo-angular-common',
        '@progress/kendo-angular-layout': 'npm:@progress/kendo-angular-layout',
        '@progress/kendo-data-query': 'npm:@progress/kendo-data-query',
        '@progress/kendo-angular-upload': 'npm:@progress/kendo-angular-upload',
        '@progress/kendo-angular-dialog': 'npm:@progress/kendo-angular-dialog',

        '@telerik/kendo-intl': 'npm:@telerik/kendo-intl',
        '@telerik/kendo-theme-default': 'npm:@telerik/kendo-theme-default',
         

        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      
        'moment': 'npm:moment/moment.js',
        'ng2-pagination': 'npm:ng2-pagination',
        'ng2-search-table': 'npm:ng2-search-table',
        'rxjs':  'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
        'ng2-ckeditor': 'npm:ng2-ckeditor',
        'ng2-toasty': 'npm:ng2-toasty',
        'angular2-tree-component': 'npm:angular2-tree-component',
        'lodash': 'npm:lodash',
        'ng2-toastr': 'npm:ng2-toastr',
        'angular-2-local-storage': 'npm:angular-2-local-storage/dist'

    },
 
    packages: {
     
        'kendo-data-query': {
            main: './dist/npm/js/main.js', defaultExtension: 'js'
        },
        'angular2-tree-component': {
            main: 'dist/angular2-tree-component.js', defaultExtension: 'js'
        },
        'lodash': {
            main: 'lodash.js', defaultExtension: 'js'
        },
        'angular-2-local-storage': {
            main: './index.js', defaultExtension: 'js'
        },
          'npm:@progress/kendo-angular-buttons': {
            main: './dist/npm/js/main.js',
        defaultExtension: 'js'
        },

        'npm:ng2-ckeditor': {
            main: 'lib/index.js',
        defaultExtension: 'js'
        },
        'npm:@progress/kendo-angular-layout': {
            main: './dist/npm/js/main.js',
        defaultExtension: 'js'
        },
        'ng2-datetime-picker': { 
            main: 'ng2-datetime-picker.umd.js',
        defaultExtension: 'js'
        } ,
        'npm:@progress/kendo-angular-grid': {
            main: './dist/npm/js/main.js',
        defaultExtension: 'js'
        },
         'npm:@progress/kendo-angular-upload': {
            main: './dist/npm/main.js',
        defaultExtension: 'js'
         },
        'npm:@progress/kendo-angular-dialog': {
            main: './dist/npm/main.js',
        defaultExtension: 'js'
         },
         'npm:@progress/kendo-dropdowns-common': {
        defaultExtension: 'js',
            main: "./dist/npm/js/main.js"
        },
        'npm:@progress/kendo-angular-intl': {
            main: './dist/npm/js/main.js',
        defaultExtension: 'js'
        },
        'npm:@telerik/kendo-intl': {
            main: './dist/npm/js/main.js',
        defaultExtension: 'js'
           },
       'npm:@angular/router/bundles/router.umd.js': {
            main: '',
        defaultExtension: 'js'
       },
          'npm:ng2-toastr': {
            main: './ng2-toastr.js',
        defaultExtension: 'js'
      },
      app: {
            main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
            main: './index.js',
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
            main: './index.js',
        defaultExtension: 'js'
         },
      'ng2-pagination': {
            main: './index.js',
        defaultExtension: 'js'
         },
      'ng2-search-table': {
             main: './ng2-search-table.js',
        defaultExtension: 'js'
      }
    }

  });
})(this);