describe('My Todo App', function(){
	
	describe('Adding an item', function(){
		
		var scope, contr;
		
		beforeEach(function(){
			
			module('todoApp');
			
			inject(function($rootScope, $controller){
				scope = $rootScope.$new();
				
				contr = $controller('AddItemContr', {
					$scope: scope
				});
			});
		
		});
		
		it('Should collect a string and place it in array', function(){
			scope.addItemToList('new list item');
			expect(scope.todoArray.length).toBe(1);
		});
		
		it('Should not let an empty string save to array', function(){
			scope.addItemToList('');
			expect(scope.todoArray.length).toBe(0);
		});
	});
	
	/*
	describe('Removing an item', function(){
		it('should remove specific string from array when deleted');
	});
	*/
});