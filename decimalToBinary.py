from collections.abc import Sequence
from timeit import default_timer


def decimal_to_binary(no_of_variable: int, minterms: Sequence[float]) -> list[str]:
    """
    >>> decimal_to_binary(3,[1.5])
    ['0.00.01.5']
    """ 
    temp = [] #? O(1)

    for minterm in minterms: #? O(n)
        string = "" #? O(n)
        for i in range(no_of_variable): #? O(n) * O(n) = O(n^2)
            string = str(minterm % 2) + string #? O(1)
            minterm //= 2 #? O(1)
        temp.append(string) #? O(1)
    return temp 
    
    #! time complexity = Big-O(n^2)
    #! No need to refactor


start = default_timer()
print(decimal_to_binary(3,[1.5]))
end = default_timer()
print(end - start)


   
