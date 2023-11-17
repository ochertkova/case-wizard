def get_with_default(param_dict, param_key, param_default):
    try:
        return param_dict[param_key]
    except:
        print("Voikko term {key} not found".format(key=param_key))
        return param_default