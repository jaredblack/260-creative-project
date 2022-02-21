import json

with open("tags.json", "r") as read_file:
    data = json.load(read_file)
    print(data["count"])

    # types = set()

    # for result in data["results"]:
    #     types.add(result["type"])

    # print(types)

    # meal, dietary, difficulty, method, cuisine

    filtered = filter(lambda result: result["type"] in ["meal", "dietary", "difficulty", "method", "cuisine"], data["results"])
    
    with open("filtered_tags.json", "w") as write_file:
        json.dump(list(filtered), write_file)