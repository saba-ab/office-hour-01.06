''' 1
შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს
სახელების მასივს და დააბრუნებს მხოლოდ იმ სახელებს 
რომლის სიგრძეც მეტია 5ზე; ფუნქცია გამოიძახეთ და დალოგეთ კონსოლში
'''

first_names = ["nika", "dato", "giorgi", "mamuka", "elene"]
long_names = []


def get_long_names(array):
    for i in range(len(array)):
        each_name = array[i]
        if len(each_name) > 5:
            long_names.append(each_name)


get_long_names(first_names)
print(long_names)

''' 2
შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს 
რიცხვებს და დააბრუნებს ამ რიცხვების ჯამს; ფუნქცია 
გამოიძახეთ და დალოგეთ კონსოლში
'''

numbers = [2342, 23653, 34567, 4357, 867, 987, 670, 45]
print(sum(numbers))
sum_result = []

# მეორე ვარიანტი


def get_sum(numbers_array):
    sum_result.append(sum(numbers_array))
    return sum_result


get_sum(numbers)
print(sum_result)

''' 3
შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს 
ორ რიცხვს და დბრუნებს სხვაობას; ფუნქცია გამოიძახეთ 
და დალოგეთ კონსოლში
'''


def minus_number(a, b):
    return a - b


result = minus_number(432, 123)
print(result)

''' 4
შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს 
ობიექტების მასივს და დააბრუნებს  ობიექტს რომლის 
ასაკიც ტოლია 25ის და დაამატებს თვისებას შემდეგი 
მნიშვნელობით (isRegistered:true); ფუნქცია გამოიძახეთ 
და დალოგეთ კონსოლში
'''
tsushima = {
    "name":  "jin sakai",
    "age": 24
}
ronin = {
    "name": "khotun khan",
    "age": 25
}
ghost = {
    "name": "lord shimura",
    "age": 45
}

samurais = [ghost, ronin, ghost]


def get_registered_status(array):
    for i in range(len(array)):
        each_samurai = array[i]
        if each_samurai["age"] == 25:
            each_samurai["is_registered"] = True
            return each_samurai


registered_samurais = get_registered_status(samurais)
print(registered_samurais)
