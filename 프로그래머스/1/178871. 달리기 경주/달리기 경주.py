def solution(players, callings):
    player_index = {player: i for i, player in enumerate(players)}

    for calling in callings:
        i = player_index[calling]
        players[i], players[i - 1] = players[i - 1], players[i]

        player_index[players[i]] = i
        player_index[players[i - 1]] = i - 1
    return players