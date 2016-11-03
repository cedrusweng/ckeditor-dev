/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'hellock', {
	requires: 'dialog',
	// jscs:disable maximumLineLength
	lang: 'zh-cn', // %REMOVE_LINE_CORE%
	// jscs:enable maximumLineLength
	icons: 'hellock', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	init: function( editor ) {
		var command = editor.addCommand( 'hellock',function(){
			alert('ok!')
		} );
		command.modes = { wysiwyg: 1, source: 1 };
		command.canUndo = false;
		command.readOnly = 1;


		editor.ui.addButton && editor.ui.addButton( 'hellock', {
			label: 'hello!',
			command: 'hellock',
			toolbar: 'hello'
		} );

		CKEDITOR.dialog.add( 'hellock', this.path + 'dialogs/hellock.js' );
	}
} );
