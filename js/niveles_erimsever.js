/*
" "--Un espacio vacío 
"#"--Una pared
"."--Objetivo
"$"--Tesoro
"*"--Tesoro sobre un objetivo
"@"--Jugador
"+"--Jugador sobre un objetivo
*/
var numNiveles = 185;
var nombreDeNivel = "First collections By Erim Sever"; 
var autorDeNivel = "Erim Sever";
var urlDeNivel = "http://www.geocities.com/erimsever/sokoban/all_levels.txt";
var mailDeNivel = "erimsever@yahoo.com";


nivel_1 = 
"#####             |" + 
"#   #####         |" + 
"# $     #  #####  |" + 
"# $# @# ####. .###|" + 
"# $ $## #     ...#|" + 
"###$    #  ## ...#|" + 
"  #    $    ## ###|" + 
"  ####  ##$$   #  |" + 
"     #####  ####  |" + 
"         #  #     |" + 
"         ####     ";

nivel_2 = 
"      ####|" + 
"    ###..#|" + 
"    #  ..#|" + 
"    #  $ #|" + 
"###### ###|" + 
"#@     ###|" + 
"## # $ $ #|" + 
" # $ # # #|" + 
" #   #   #|" + 
" #########";

nivel_3 = 
"######   |" + 
"#....####|" + 
"#@ $$$ .#|" + 
"##  $   #|" + 
" ####$# #|" + 
"    #   #|" + 
"    #####";

nivel_4 = 
"######### |" + 
"#  @##  # |" + 
"# $$  ..##|" + 
"#  $$#.. #|" + 
"# $$ #.. #|" + 
"#  # #####|" + 
"##   #    |" + 
" #####    ";

nivel_5 = 
"####       |" + 
"#..###     |" + 
"#...@######|" + 
"#..$      #|" + 
"###$ ###  #|" + 
"### $# $ ##|" + 
"#    $   # |" + 
"# $$ ##  # |" + 
"#   ###  # |" + 
"##### #### ";

nivel_6 = 
"      ####|" + 
" ######  #|" + 
"##  @#...#|" + 
"#  $ #.*.#|" + 
"# $####.*#|" + 
"#    .#  #|" + 
"# $#$##$ #|" + 
"#  $ ##  #|" + 
"###     $#|" + 
"  ####   #|" + 
"     #  ##|" + 
"     #### ";

nivel_7 = 
"########|" + 
"#@     #|" + 
"# * *  #|" + 
"#*$***.#|" + 
"# *    #|" + 
"#     ##|" + 
"####### ";

nivel_8 = 
"      ####  |" + 
"      #  #  |" + 
" ######  ###|" + 
"##   ##    #|" + 
"#@$  $ $#  #|" + 
"#  ##$$  $ #|" + 
"## $  ##.$ #|" + 
" ##   #..*##|" + 
"  #####...# |" + 
"      #..## |" + 
"      ####  ";

nivel_9 = 
"  ######|" + 
"  # $..#|" + 
"###  *.#|" + 
"#  $ *.#|" + 
"# $$$#.#|" + 
"#  # ###|" + 
"#@   #  |" + 
"######  ";

nivel_10 = 
"  ######    |" + 
"  #    #    |" + 
"###$ $ #### |" + 
"#   $   $ ##|" + 
"# $ # $ .* #|" + 
"###  #  #. #|" + 
"  #  $ #..@#|" + 
"  #  $##...#|" + 
"  ## $ #####|" + 
"   #  .#    |" + 
"   ###.#    |" + 
"     ###    ";

nivel_11 = 
"  #####   |" + 
" ##   ####|" + 
" # $   $ #|" + 
" #. $$#$@#|" + 
"##.##  $ #|" + 
"# *.#   ##|" + 
"# ... ### |" + 
"#######   ";

nivel_12 = 
"######   |" + 
"#    ####|" + 
"# ##    #|" + 
"#  $ $  #|" + 
"##$  # ##|" + 
" #   #$ #|" + 
" # $$$ @#|" + 
"####.$###|" + 
"#.... ..#|" + 
"#   .####|" + 
"######   ";

nivel_13 = 
"  ####     |" + 
"###  ######|" + 
"#    #@   #|" + 
"#  # $ $$ #|" + 
"#   $    ##|" + 
"##$## #### |" + 
" #  #$ #   |" + 
" ##....#   |" + 
"  ###. #   |" + 
"    #. #   |" + 
"    ####   ";

nivel_14 = 
" ######    |" + 
" #    #    |" + 
"##  $$##   |" + 
"#  #$  #   |" + 
"# $  #.##  |" + 
"#  $##..###|" + 
"##   ...$ #|" + 
" ####@    #|" + 
"    #######";

nivel_15 = 
"          #####|" + 
"          #...#|" + 
"          #.. #|" + 
"######### #...#|" + 
"#.      # #  ##|" + 
"#.  $ $ # #  # |" + 
"## $##### #  # |" + 
" #  ####  ## ##|" + 
" # $$  #####  #|" + 
" #            #|" + 
" # ########$  #|" + 
" # ###### # $ #|" + 
" #   $  # #$  #|" + 
" #   $  # #   #|" + 
" ##### @# #####|" + 
"     ####      ";

nivel_16 = 
"    ####       |" + 
"   ##..#       |" + 
"  ##  $#       |" + 
" ##  $ #       |" + 
"##  $ ##       |" + 
"# $  ##        |" + 
"#  $##         |" + 
"#  $ ##        |" + 
"##  $ ##       |" + 
" ##  $@##      |" + 
"  ##  $ ##     |" + 
"   ##  $ ####  |" + 
"    ##  $ ..###|" + 
"     ##.......#|" + 
"      #########";

nivel_17 = 
" #######|" + 
" #     #|" + 
"## .$* #|" + 
"#  *@* #|" + 
"#  *$. #|" + 
"##    ##|" + 
" ###### ";

nivel_18 = 
" #######|" + 
" #     #|" + 
"## .** #|" + 
"#  $@$ #|" + 
"#  **. #|" + 
"##    ##|" + 
" ###### ";

nivel_19 = 
" #######|" + 
" #     #|" + 
"## .*$ #|" + 
"#  *@* #|" + 
"#  $*. #|" + 
"##    ##|" + 
" ###### ";

nivel_20 = 
"####### |" + 
"#     ##|" + 
"# **$$ #|" + 
"# *+.  #|" + 
"# *** ##|" + 
"#     # |" + 
"####### ";

nivel_21 = 
"  #####      |" + 
"  #   #      |" + 
"  # # #######|" + 
"  #         #|" + 
"### #### #  #|" + 
"#   ### ## ##|" + 
"# # * ###+$# |" + 
"#  $* #    # |" + 
"###    .* ## |" + 
"  ### ## ##  |" + 
"    #    #   |" + 
"    ######   ";

nivel_22 = 
"##########  |" + 
"#   ##   #  |" + 
"#      $ #  |" + 
"### ###$##  |" + 
"  # # # #   |" + 
" ## ##  ####|" + 
" #       $ #|" + 
" # $## ### #|" + 
" #  #    # #|" + 
" ####  # # #|" + 
"   #.# ##@ #|" + 
"   #*.  ####|" + 
"   #..  #   |" + 
"   #    #   |" + 
"   ######   ";

nivel_23 = 
"      #######|" + 
" ######     #|" + 
" #   ##$$$$ #|" + 
" #          #|" + 
" ### ########|" + 
"   # #       |" + 
"#### #       |" + 
"#  # ##      |" + 
"# ....#      |" + 
"#     #      |" + 
"#   #@#      |" + 
"#######      ";

nivel_24 = 
" ################################|" + 
" #                              #|" + 
" # ###  ##################### # #|" + 
" # #                          # #|" + 
" # # # ###################### # #|" + 
" # # #                      # # #|" + 
" # # # #################### # # #|" + 
" # # # #                  # # # #|" + 
" # # # # ################ # # # #|" + 
" # # # # #              # # # # #|" + 
" # # # # # ########## # # # # # #|" + 
" # # # # # #@$          # # # # #|" + 
" # # # # # ########## # # # # # #|" + 
" # # # # #            # # # # # #|" + 
" # # # # ############ # # # # # #|" + 
" # # # #                # # # # #|" + 
" # # # #  ############### # # # #|" + 
" # # #                    # # # #|" + 
" # # #  ################### # # #|" + 
" # # #                      # # #|" + 
" # # ######################## # #|" + 
" # #                            #|" + 
"## # ########################## #|" + 
"#.                              #|" + 
"#################################";

nivel_25 = 
"   ###   |" + 
"  ##.##  |" + 
"###...###|" + 
"#       #|" + 
"# $$ $$ #|" + 
"#  # #  #|" + 
"####$####|" + 
"#  # # @#|" + 
"# $ $ $ #|" + 
"#   *   #|" + 
"###...###|" + 
"  ##.##  |" + 
"   ###   ";

nivel_26 = 
"  ####  |" + 
"###  #  |" + 
"# .$.###|" + 
"# $@$  #|" + 
"##.$.  #|" + 
" #  ####|" + 
" ##  #  |" + 
"  #  #  |" + 
"  #  #  |" + 
"  ####  ";

nivel_27 = 
"  #######|" + 
" ##... .#|" + 
" # $#.# #|" + 
" #$@  $ #|" + 
"## ##$# #|" + 
"# $     #|" + 
"#   #  ##|" + 
"######## ";

nivel_28 = 
"  #######|" + 
" ##...  #|" + 
" #  #$# #|" + 
" #    # #|" + 
"## ##$# #|" + 
"#    $  #|" + 
"#@  #  ##|" + 
"######## ";

nivel_29 = 
"######|" + 
"#  ..#|" + 
"#$$$ #|" + 
"#.  @#|" + 
"######";

nivel_30 = 
"######|" + 
"# .  #|" + 
"#$$$ #|" + 
"#. .@#|" + 
"######";

nivel_31 = 
" #########|" + 
"##  $@...#|" + 
"#  $$#####|" + 
"#    #    |" + 
"##   #    |" + 
" #####    ";

nivel_32 = 
"######|" + 
"#... #|" + 
"# #$ #|" + 
"# $  #|" + 
"# $ ##|" + 
"#@ ## |" + 
"####  ";

nivel_33 = 
"######|" + 
"#  @ #|" + 
"# $  #|" + 
"## #$#|" + 
"# $$ #|" + 
"#  $.#|" + 
"#....#|" + 
"######";

nivel_34 = 
"######|" + 
"#    #|" + 
"# $ .#|" + 
"# .$ #|" + 
"#.$###|" + 
"##@#  |" + 
" ###  ";

nivel_35 = 
"####            |" + 
"#  #############|" + 
"#        $@....#|" + 
"#  #######$#####|" + 
"## #.. ..# #    |" + 
" # #*$ $ $ #    |" + 
" # $  $  # #    |" + 
"## ###   # ##   |" + 
"# $#######  #   |" + 
"#           #   |" + 
"##########  #   |" + 
"         ####   ";

nivel_36 = 
"   ##### |" + 
"   #   # |" + 
"  ## # ##|" + 
"### $   #|" + 
"#...$$# #|" + 
"###@#   #|" + 
"  #######";

nivel_37 = 
"   #####|" + 
"  ##   #|" + 
"  #  # #|" + 
"  # $  #|" + 
"###$ # #|" + 
"#..* # #|" + 
"##@#   #|" + 
" #######";

nivel_38 = 
"######## |" + 
"#...#  # |" + 
"# .*   ##|" + 
"##@$$$  #|" + 
" ### $  #|" + 
"   #   ##|" + 
"   ##  # |" + 
"    #### ";

nivel_39 = 
"########   |" + 
"#   * @#   |" + 
"# $. * ##  |" + 
"### *.  ###|" + 
" # *.*$$  #|" + 
" #        #|" + 
" #######  #|" + 
"       ####";

nivel_40 = 
"########   |" + 
"#   .$@#   |" + 
"# $. * ##  |" + 
"## #**  ###|" + 
" # *.*  $ #|" + 
" #        #|" + 
" #######  #|" + 
"       ####";

nivel_41 = 
"######  |" + 
"#....#  |" + 
"#.$*$###|" + 
"#@* $  #|" + 
"### $  #|" + 
"  #  $ #|" + 
"  ##   #|" + 
"   #####";

nivel_42 = 
"#####   |" + 
"#...##  |" + 
"#.$$ ###|" + 
"#@* $ .#|" + 
"### $  #|" + 
"  #  $ #|" + 
"  ###  #|" + 
"    ####";

nivel_43 = 
" ##########|" + 
"##     .*+#|" + 
"#  $$######|" + 
"#    #     |" + 
"##   #     |" + 
" #####     ";

nivel_44 = 
"#######|" + 
"#  #  #|" + 
"#  #  #|" + 
"# $$  #|" + 
"#@ .$##|" + 
"###..# |" + 
"  #### ";

nivel_45 = 
"######  |" + 
"#....###|" + 
"# ***  #|" + 
"#@$ $  #|" + 
"### $$ #|" + 
"  #    #|" + 
"  ######";

nivel_46 = 
"######  |" + 
"# ...###|" + 
"# $$*  #|" + 
"#@$ *  #|" + 
"### ** #|" + 
"  #    #|" + 
"  ######";

nivel_47 = 
"   #### |" + 
"####  # |" + 
"#@   $# |" + 
"#  #. ##|" + 
"## .#  #|" + 
" #$    #|" + 
" #  ####|" + 
" ####   ";

nivel_48 = 
"  ####  |" + 
"  #  #  |" + 
"###  ###|" + 
"#  $*  #|" + 
"#  *. @#|" + 
"###  ###|" + 
"  #  #  |" + 
"  ####  ";

nivel_49 = 
"  #### |" + 
"  #  # |" + 
"###  # |" + 
"#  $$##|" + 
"# . . #|" + 
"###  @#|" + 
"  #####";

nivel_50 = 
"   ####  |" + 
"  ##  #  |" + 
"###   ## |" + 
"#  $.$ ##|" + 
"#  .#.  #|" + 
"###$.$  #|" + 
"  #   ###|" + 
"  #@ ##  |" + 
"  ####   ";

nivel_51 = 
"    ####|" + 
"##### .#|" + 
"#    $*#|" + 
"#   #@ #|" + 
"########";

nivel_52 = 
"     #### |" + 
" #####@ # |" + 
" #  #  $# |" + 
"##$ $ $.##|" + 
"#   ##$..#|" + 
"#      ..#|" + 
"##########";

nivel_53 = 
" #####|" + 
"##.$.#|" + 
"#  # #|" + 
"# $$ #|" + 
"#.  @#|" + 
"######";

nivel_54 = 
"######|" + 
"#..$ #|" + 
"#.$$ #|" + 
"###@ #|" + 
"  ####";

nivel_55 = 
"#####|" + 
"#. .#|" + 
"# $ #|" + 
"# * #|" + 
"# $ #|" + 
"## @#|" + 
" ####";

nivel_56 = 
"######|" + 
"#.  .#|" + 
"# $$$#|" + 
"#$ * #|" + 
"#. @.#|" + 
"######";

nivel_57 = 
"    #####|" + 
"  ###   #|" + 
"  #  $  #|" + 
" ## $ # #|" + 
"## $  # #|" + 
"# $  ##.#|" + 
"#   ##.*#|" + 
"# $##...#|" + 
"#      ##|" + 
"##### @# |" + 
"    #### ";

nivel_58 = 
" #####     ##### |" + 
" #   #     #   # |" + 
" # $ ####### $ ##|" + 
"## $$ $ # .**.. #|" + 
"#   $  $   $.   #|" + 
"# $     # $ .#*##|" + 
"###@ ###### ...# |" + 
"  ####    #..### |" + 
"          ####   ";

nivel_59 = 
" #####|" + 
" #   #|" + 
"##$. #|" + 
"# ** #|" + 
"# $. #|" + 
"# ** #|" + 
"#   @#|" + 
"######";

nivel_60 = 
"    #####|" + 
"#####   #|" + 
"#   #   #|" + 
"# $$$$$ #|" + 
"#@..... #|" + 
"#########";

nivel_61 = 
"######## |" + 
"#@ ##  ##|" + 
"#   #   #|" + 
"# $$$$$ #|" + 
"# ..... #|" + 
"#########";

nivel_62 = 
"#######|" + 
"#  #  #|" + 
"#  #  #|" + 
"# $$$ #|" + 
"# @...#|" + 
"#######";

nivel_63 = 
"    ####      |" + 
"    #  ##     |" + 
" #### $ ##### |" + 
" #  # # ##  ##|" + 
" #  $  $+....#|" + 
" #  # ##$##.##|" + 
" ## # ## #.. #|" + 
" #  #  # #.. #|" + 
" #    $#  #. #|" + 
"##  ##    ####|" + 
"# $$ #  $ #   |" + 
"#  $  $ $##   |" + 
"#    #   #    |" + 
"##########    ";

nivel_64 = 
"  #####   |" + 
"  #   #   |" + 
"### $ ### |" + 
"#   $   ##|" + 
"# .**.$*.#|" + 
"#   $    #|" + 
"### * ####|" + 
"  # . #   |" + 
"  #  @#   |" + 
"  #####   ";

nivel_65 = 
" ####  |" + 
" #. ###|" + 
"##*$  #|" + 
"# .$ @#|" + 
"# * ###|" + 
"#   #  |" + 
"#####  ";

nivel_66 = 
"######  |" + 
"#    ###|" + 
"# $*.$ #|" + 
"# $ .. #|" + 
"##  @###|" + 
" #####  ";

nivel_67 = 
"  #### |" + 
"### .# |" + 
"#@   ##|" + 
"# $$..#|" + 
"# $ $.#|" + 
"##  ###|" + 
" ####  ";

nivel_68 = 
"  #### |" + 
"  #  # |" + 
"###  ##|" + 
"#  *$ #|" + 
"# #.# #|" + 
"#    @#|" + 
"#######";

nivel_69 = 
"   ####  |" + 
"   #  #  |" + 
" ###  #  |" + 
"## $.$###|" + 
"#  .*.  #|" + 
"#  $.$  #|" + 
"###  ####|" + 
"  #@ #   |" + 
"  ####   ";

nivel_70 = 
"   ####  |" + 
"####  #  |" + 
"# $  $#  |" + 
"#   ..###|" + 
"##..*   #|" + 
" #$  $  #|" + 
" # @#####|" + 
" ####    ";

nivel_71 = 
"   #### |" + 
"####  # |" + 
"# $  $# |" + 
"#   ..##|" + 
"##..   #|" + 
" # $ $ #|" + 
" # @####|" + 
" ####   ";

nivel_72 = 
" ###### |" + 
" #... # |" + 
" #.$$ # |" + 
"##$ # ##|" + 
"#  #   #|" + 
"#  $   #|" + 
"#@  ####|" + 
"#####   ";

nivel_73 = 
"   #### |" + 
"####  # |" + 
"#    $# |" + 
"# ..*.##|" + 
"## *$  #|" + 
" #$   @#|" + 
" #  ####|" + 
" ####   ";

nivel_74 = 
"   #### |" + 
"####  # |" + 
"#    $# |" + 
"# ..* ##|" + 
"##.*   #|" + 
" #$  $@#|" + 
" #  ####|" + 
" ####   ";

nivel_75 = 
" ####     |" + 
" #  #     |" + 
"##  ######|" + 
"#  *#@*  #|" + 
"#    **  #|" + 
"##  #  ###|" + 
" ####  #  |" + 
"    ####  ";

nivel_76 = 
"    ####  |" + 
"    #  #  |" + 
"#####  #  |" + 
"##   **###|" + 
"#  **@*  #|" + 
"#    **  #|" + 
"###  * ###|" + 
"  ##   #  |" + 
"   #####  ";

nivel_77 = 
"    #######       |" + 
"    #     #       |" + 
"    #* $ $#####   |" + 
"  ###  $ $    ####|" + 
"  #. # ##*$$$@   #|" + 
"###.$# #.$ $ ##$ #|" + 
"# $        *.# *.#|" + 
"#.  #  #  $     ##|" + 
"#.  .#######$. $# |" + 
"#.. .#     #... # |" + 
"######     ###### ";

nivel_78 = 
"      #######  |" + 
"  #####     #  |" + 
" ##   #  #$ #  |" + 
" #  $   ##  ###|" + 
"##$$.# @ $ *  #|" + 
"# *..# * * #  #|" + 
"#   ## ## *.* #|" + 
"###$   .##    #|" + 
"  #  * .#######|" + 
"  #######      ";

nivel_79 = 
"     ####  |" + 
"    ##  #  |" + 
"#####   #  |" + 
"#     * #  |" + 
"#  **** ## |" + 
"##  *@*  ##|" + 
" ## ****  #|" + 
"  # *     #|" + 
"  #   #####|" + 
"  #  ##    |" + 
"  ####     ";

nivel_80 = 
"     ####  |" + 
"     #  #  |" + 
"######  #  |" + 
"#     *.#  |" + 
"#  $$$*.#  |" + 
"###.*@*.###|" + 
"  #.*$$$  #|" + 
"  #.*     #|" + 
"  #  ######|" + 
"  #  #     |" + 
"  ####     ";

nivel_81 = 
"   ####  |" + 
"####  ###|" + 
"#       #|" + 
"#  ***  #|" + 
"## *   ##|" + 
" # ***  #|" + 
" # *@*  #|" + 
" #  *  ##|" + 
" ####### ";

nivel_82 = 
"#####|" + 
"#+$.#|" + 
"# $ #|" + 
"#$$ #|" + 
"# $ #|" + 
"#...#|" + 
"#####";

nivel_83 = 
"   ####  |" + 
"####  ## |" + 
"#      ##|" + 
"#. ***  #|" + 
"## $@*  #|" + 
" #  *  ##|" + 
" ####### ";

nivel_84 = 
"      #######|" + 
" ######     #|" + 
" #   ##$$$$ #|" + 
" #          #|" + 
" ### ########|" + 
"   # #       |" + 
"#### #       |" + 
"#  # ##      |" + 
"# ....#      |" + 
"#  $. #      |" + 
"#   #@#      |" + 
"#######      ";

nivel_85 = 
"   ####  |" + 
"####  ## |" + 
"#      ##|" + 
"#  ***  #|" + 
"## $@*  #|" + 
" #  *. ##|" + 
" ####### ";

nivel_86 = 
"      ####   |" + 
"   ####  #   |" + 
"   #     #   |" + 
"#### $  $### |" + 
"# $ *  *.  # |" + 
"#  $..$.*  # |" + 
"##$ .*@*. $##|" + 
" #  *.$..$  #|" + 
" #  .* .* $ #|" + 
" ###$. $ ####|" + 
"   #     #   |" + 
"   #  ####   |" + 
"   ####      ";

nivel_87 = 
"      ####   |" + 
"   #### .#   |" + 
"   #.  $ #   |" + 
"#### # * ### |" + 
"#  $ $  #. # |" + 
"#. $##.*  $# |" + 
"##  # @ #  ##|" + 
" #$  *.##$ .#|" + 
" # .#  $ $  #|" + 
" ### *   ####|" + 
"   # $  .#   |" + 
"   #. ####   |" + 
"   ####      ";

nivel_88 = 
"      ####   |" + 
"   ####  #   |" + 
"   #     #   |" + 
"####$  $ ### |" + 
"# $  #.$#  # |" + 
"#    *..#$ # |" + 
"##   #+##  ##|" + 
" # $#...    #|" + 
" #  #$.#  $ #|" + 
" ###  ..$####|" + 
"   # $   #   |" + 
"   #  ####   |" + 
"   ####      ";

nivel_89 = 
"    ######|" + 
"  ###    #|" + 
" ## $. $ #|" + 
"## $ .$ ##|" + 
"# $. * ## |" + 
"#  .$.##  |" + 
"##$.$.#   |" + 
" # .$.##  |" + 
" ##. $ #  |" + 
"  ##  @#  |" + 
"   #####  ";

nivel_90 = 
"   #### |" + 
"#### .# |" + 
"#.    # |" + 
"# $ *$##|" + 
"##$* $ #|" + 
" #    .#|" + 
" #.@####|" + 
" ####   ";

nivel_91 = 
"#####    |" + 
"#   ##   |" + 
"# $  ### |" + 
"# $$.*.# |" + 
"# .$*.*# |" + 
"##..$$.# |" + 
" #*..$$##|" + 
" #    $ #|" + 
" ####  @#|" + 
"    #####";

nivel_92 = 
"#####    |" + 
"#   ##   |" + 
"# $  ### |" + 
"# $$.*.# |" + 
"# .$$.*# |" + 
"##..*$.# |" + 
" #*..$$##|" + 
" #    $ #|" + 
" ####  @#|" + 
"    #####";

nivel_93 = 
"########|" + 
"#      #|" + 
"# *** @#|" + 
"# $ . ##|" + 
"# $$* # |" + 
"# *.. # |" + 
"# $ . # |" + 
"# *** # |" + 
"####### ";

nivel_94 = 
"#######|" + 
"#     #|" + 
"# $$$ #|" + 
"# *..##|" + 
"# $$*# |" + 
"# $ .# |" + 
"# *..# |" + 
"# $$*# |" + 
"#@...# |" + 
"###### ";

nivel_95 = 
"###### |" + 
"#    # |" + 
"# $. ##|" + 
"##$.$ #|" + 
" # . @#|" + 
" ######";

nivel_96 = 
"####   #####|" + 
"#  #####   #|" + 
"# $$     $ #|" + 
"#  # ## # ##|" + 
"## #... # # |" + 
" #  .*.## # |" + 
"##$##.. # # |" + 
"# $   $ #$# |" + 
"#   ##   @# |" + 
"########### ";

nivel_97 = 
" #####  |" + 
"##   #  |" + 
"# .$.###|" + 
"# $@$  #|" + 
"# .$.  #|" + 
"########";

nivel_98 = 
" #####    |" + 
"##   #    |" + 
"# .$.#####|" + 
"# $+$    #|" + 
"##.$. $  #|" + 
" #########";

nivel_99 = 
"#####|" + 
"#@$.#|" + 
"# $.#|" + 
"##$.#|" + 
"#   #|" + 
"#   #|" + 
"#####";

nivel_100 = 
"       ######  |" + 
"  ######    #  |" + 
" ##   #  #$ #  |" + 
" #  $   *#  ###|" + 
"##$$.# @ * *  #|" + 
"# *..# * * #  #|" + 
"#   ## ## * * #|" + 
"###$   .##    #|" + 
"  #  * .#######|" + 
"  #######      ";

nivel_101 = 
" ########|" + 
" #      #|" + 
" # $**. #|" + 
" # *  * #|" + 
" # *  *##|" + 
" # *  * #|" + 
" # *# * #|" + 
" # .**$ #|" + 
" #     @#|" + 
" ########";

nivel_102 = 
"########|" + 
"#      #|" + 
"# $**. #|" + 
"# * ** #|" + 
"# *  * #|" + 
"# *  * #|" + 
"# .**$ #|" + 
"#     @#|" + 
"########";

nivel_103 = 
" ########|" + 
" #      #|" + 
" # $**. #|" + 
" # * ** #|" + 
" # *  * #|" + 
" # *  *##|" + 
" # *  * #|" + 
" # *# * #|" + 
" # .**$ #|" + 
" #     @#|" + 
" ########";

nivel_104 = 
"  #####  |" + 
"###   ###|" + 
"# $*.*$ #|" + 
"# $...$ #|" + 
"#   @   #|" + 
"#########";

nivel_105 = 
"##########|" + 
"#   ##   #|" + 
"# $..* $@#|" + 
"#    #####|" + 
"##   #    |" + 
" #####    ";

nivel_106 = 
"###########|" + 
"#   #     #|" + 
"# *..* $ @#|" + 
"#  $ ######|" + 
"##   #     |" + 
" #####     ";

nivel_107 = 
"#######|" + 
"#     #|" + 
"# $ # #|" + 
"# .*  #|" + 
"#  $#*#|" + 
"#* .*@#|" + 
"#######";

nivel_108 = 
"######## |" + 
"#@  #  ##|" + 
"#  $  $ #|" + 
"# $*$*$ #|" + 
"# ..... #|" + 
"#########";

nivel_109 = 
"  ####|" + 
"  #  #|" + 
"###  #|" + 
"#  $*#|" + 
"#@  .#|" + 
"######";

nivel_110 = 
"  ####|" + 
"  # @#|" + 
"###. #|" + 
"#  $$#|" + 
"#   .#|" + 
"######";

nivel_111 = 
"   ####   |" + 
"   #  #   |" + 
"####  #   |" + 
"# $ $ #   |" + 
"#@$   ####|" + 
"### $ $  #|" + 
"  ##  ...#|" + 
"   ## ..##|" + 
"    ##### ";

nivel_112 = 
"  ####   |" + 
"###  ### |" + 
"#.* $  # |" + 
"#*.* $ ##|" + 
"#.*.$ $ #|" + 
"#*.* $ @#|" + 
"#.* $ ###|" + 
"#######  ";

nivel_113 = 
"######## |" + 
"#   #  ##|" + 
"# $  *  #|" + 
"#$ $* * #|" + 
"#.$..*. #|" + 
"# # # # #|" + 
"#.*  $. #|" + 
"#* *$ $ #|" + 
"# *..$@##|" + 
"######## ";

nivel_114 = 
"  ####    |" + 
"###  #    |" + 
"#    ###  |" + 
"# $   @###|" + 
"### $  $ #|" + 
"  ###$...#|" + 
"    # .###|" + 
"    ####  ";

nivel_115 = 
"  ####  |" + 
" ##  #  |" + 
"##   ###|" + 
"#  .*  #|" + 
"# $ *  #|" + 
"###   ##|" + 
"  #@ ## |" + 
"  ####  ";

nivel_116 = 
"    #####   |" + 
"    #   #   |" + 
"#####  $####|" + 
"# $ $ $....#|" + 
"#....$ $ $ #|" + 
"####$  #####|" + 
"   #  @#    |" + 
"   #####    ";

nivel_117 = 
"####### |" + 
"#  #@ ##|" + 
"# $  $ #|" + 
"#.*  *.#|" + 
"########";

nivel_118 = 
"########|" + 
"#.# @#.#|" + 
"# $  $ #|" + 
"# $..$ #|" + 
"#  #  ##|" + 
"####### ";

nivel_119 = 
"  ####  |" + 
" ##  ## |" + 
"##  $ ##|" + 
"# .... #|" + 
"# *$$$ #|" + 
"##    ##|" + 
" ## @## |" + 
"  ####  ";

nivel_120 = 
"  ####  |" + 
" ##  ## |" + 
"##....##|" + 
"#  .$  #|" + 
"# $$$$ #|" + 
"##    ##|" + 
" ## @## |" + 
"  ####  ";

nivel_121 = 
"  ####  |" + 
" ##  ## |" + 
"##    ##|" + 
"#   $  #|" + 
"#.**$*.#|" + 
"##    ##|" + 
" ## @## |" + 
"  ####  ";

nivel_122 = 
"   #####   |" + 
"  ##   ##  |" + 
" ##  .  ## |" + 
"## *$*$* ##|" + 
"#  . . .  #|" + 
"# **$*$*$ #|" + 
"#  . . .  #|" + 
"## *$ $* ##|" + 
" ##  *  ## |" + 
"  ##  @##  |" + 
"   #####   ";

nivel_123 = 
"  ######  |" + 
" ##    ## |" + 
"## .  . ##|" + 
"#  * $.  #|" + 
"# $*$$*$ #|" + 
"## .  .@##|" + 
" ######## ";

nivel_124 = 
"  ########|" + 
" ##      #|" + 
"##  $.$*.#|" + 
"#  $**.$.#|" + 
"# $*.$.  #|" + 
"#  $.  ###|" + 
"##  @###  |" + 
" #####    ";

nivel_125 = 
" ####    |" + 
" #  ##   |" + 
" # . ### |" + 
"## *   ##|" + 
"#  * *  #|" + 
"# ***** #|" + 
"#  * *  #|" + 
"###  * ##|" + 
"  ## $ # |" + 
"   #  @# |" + 
"   ##### ";

nivel_126 = 
"    #####|" + 
"    #   #|" + 
"#####$  #|" + 
"#@$..$* #|" + 
"## $.  ##|" + 
" ###  .# |" + 
"   ##### ";

nivel_127 = 
"##### |" + 
"#   # |" + 
"#$$ ##|" + 
"#..*@#|" + 
"######";

nivel_128 = 
"###### |" + 
"#    # |" + 
"#  $ # |" + 
"#$$$ ##|" + 
"#...*+#|" + 
"#######";

nivel_129 = 
"####### |" + 
"#     # |" + 
"# $ $ # |" + 
"#$$$* ##|" + 
"#....*+#|" + 
"########";

nivel_130 = 
"####### |" + 
"#    .# |" + 
"#$$$$ ##|" + 
"#....$@#|" + 
"########";

nivel_131 = 
" #####  |" + 
"##   #  |" + 
"#  * ###|" + 
"# $+*  #|" + 
"#  *   #|" + 
"########";

nivel_132 = 
" #####  |" + 
"##   ###|" + 
"# .$.  #|" + 
"# $ $ @#|" + 
"# .$.###|" + 
"######  ";

nivel_133 = 
" #####  |" + 
"##   ###|" + 
"#  * $ #|" + 
"# *$. @#|" + 
"#  .####|" + 
"#####   ";

nivel_134 = 
"  ####   |" + 
"###  #   |" + 
"# $ $####|" + 
"# . .   #|" + 
"# $.$. @#|" + 
"#########";

nivel_135 = 
" ######|" + 
"##    #|" + 
"#  *  #|" + 
"# $.$##|" + 
"# .$. #|" + 
"# $.$ #|" + 
"# .$.@#|" + 
"#######";

nivel_136 = 
" ##### |" + 
"##   # |" + 
"#  * ##|" + 
"# $.$ #|" + 
"# .$. #|" + 
"# $.$ #|" + 
"#@.$.##|" + 
"###### ";

nivel_137 = 
"#####  |" + 
"#   #  |" + 
"#   #  |" + 
"#  ##  |" + 
"#..####|" + 
"#**   #|" + 
"#..$$ #|" + 
"#$ #  #|" + 
"# $####|" + 
"#@ #   |" + 
"####   ";

nivel_138 = 
"   #####   |" + 
"   #   #   |" + 
"   # $ #   |" + 
"#####$ ####|" + 
"#   ...#  #|" + 
"# $$...$$ #|" + 
"#  #.@.   #|" + 
"#### $#####|" + 
"   # $ #   |" + 
"   #   #   |" + 
"   #####   ";

nivel_139 = 
"   #####   |" + 
"   #   #   |" + 
"   # $ #   |" + 
"####*$ ####|" + 
"#   ...*  #|" + 
"# $$.*.$$ #|" + 
"#  *...   #|" + 
"#### $*####|" + 
"   # $ #   |" + 
"   #  @#   |" + 
"   #####   ";

nivel_140 = 
"##########|" + 
"#.     ..#|" + 
"#*##  .. #|" + 
"# ##### ##|" + 
"#    @# # |" + 
"# #$$$# # |" + 
"#     $ # |" + 
"##  # $ # |" + 
" ####   # |" + 
"    ##### ";

nivel_141 = 
"#######|" + 
"# .   #|" + 
"# #$  #|" + 
"#  $ ##|" + 
"###$ ##|" + 
"  # ..#|" + 
"  #  @#|" + 
"  #####";

nivel_142 = 
"############# |" + 
"#  .  .  ##@# |" + 
"# .* * * ##$##|" + 
"## ##.# ###..#|" + 
" # # $#   $ .#|" + 
" # $  #$$ #  #|" + 
" #      $ ####|" + 
" #   ######   |" + 
" #####        ";

nivel_143 = 
" ###### |" + 
"##    # |" + 
"# $$$ # |" + 
"#   $ ##|" + 
"#   *. #|" + 
"####..+#|" + 
"   #####";

nivel_144 = 
"####   #####|" + 
"#  #####   #|" + 
"#          #|" + 
"#  # ## # ##|" + 
"## #    # # |" + 
" #     ## # |" + 
"## ##. ## # |" + 
"#      ##$# |" + 
"#   ##   @# |" + 
"########### ";

nivel_145 = 
"   ####  |" + 
"   #  ###|" + 
"####    #|" + 
"#    ** #|" + 
"# *##   #|" + 
"## .#* ##|" + 
" #  $ @# |" + 
" #  #### |" + 
" ####    ";

nivel_146 = 
" ####  |" + 
" #  ###|" + 
"##    #|" + 
"#  ** #|" + 
"#  *@##|" + 
"##  ## |" + 
" ####  ";

nivel_147 = 
"    ##### |" + 
"    #   # |" + 
"   ##$  ##|" + 
"####  $$ #|" + 
"#   *+.. #|" + 
"# $*..####|" + 
"##  $##   |" + 
" #   #    |" + 
" #####    ";

nivel_148 = 
"    ##### |" + 
"    #   # |" + 
"   ##$  ##|" + 
"   #  $$ #|" + 
"####$... #|" + 
"# ...+####|" + 
"# $$  #   |" + 
"##  $##   |" + 
" #   #    |" + 
" #####    ";

nivel_149 = 
" ###### |" + 
" #   @##|" + 
" #$$ $ #|" + 
"## ##  #|" + 
"# .*.*.#|" + 
"#      #|" + 
"####  ##|" + 
"   #### ";

nivel_150 = 
" ######|" + 
" #  ..#|" + 
"##$ # #|" + 
"#   $ #|" + 
"#  @###|" + 
"#####  ";

nivel_151 = 
"   ####|" + 
"####  #|" + 
"#  #  #|" + 
"#  . .#|" + 
"#$$$$$#|" + 
"#. . .#|" + 
"#  # @#|" + 
"#  ####|" + 
"####   ";

nivel_152 = 
"######  |" + 
"#  ..#  |" + 
"# $ .###|" + 
"### $$ #|" + 
"  #   @#|" + 
"  ######";

nivel_153 = 
"######  |" + 
"#....#  |" + 
"# $  ###|" + 
"### $$ #|" + 
"  #  $ #|" + 
"  #   @#|" + 
"  ######";

nivel_154 = 
" ####   |" + 
" #  ####|" + 
" # ... #|" + 
"##$.#  #|" + 
"#  ##  #|" + 
"# $$ $##|" + 
"#    @# |" + 
"####### ";

nivel_155 = 
"    ######    |" + 
"    #    #    |" + 
"    # $ $##   |" + 
"  ###$    #   |" + 
"###  **.*$####|" + 
"# $$ .....$  #|" + 
"#    ..*** $ #|" + 
"# $ ***..    #|" + 
"#  $..... $$ #|" + 
"####$*.**  ###|" + 
"   #    $###  |" + 
"   ##$ $ #    |" + 
"    #   @#    |" + 
"    ######    ";

nivel_156 = 
"    ######    |" + 
"    #    #    |" + 
"    # $ $##   |" + 
"  ###$    #   |" + 
"###  **.*$####|" + 
"# $$ .....$  #|" + 
"#   *..*** $ #|" + 
"# $ ***..*   #|" + 
"#  $..... $$ #|" + 
"####$*.**  ###|" + 
"   #    $###  |" + 
"   ##$ $ #    |" + 
"    #   @#    |" + 
"    ######    ";

nivel_157 = 
"  ########  |" + 
"  #  ## .#  |" + 
"###$ ##$.###|" + 
"#    $     #|" + 
"# $  @$  $ #|" + 
"#.$##.$##$.#|" + 
"#. ##..## .#|" + 
"############";

nivel_158 = 
" ####      |" + 
" #  #      |" + 
"## .###### |" + 
"# $  $   ##|" + 
"# $ $@$$. #|" + 
"#   ## .. #|" + 
"#.. ##  ###|" + 
"#########  ";

nivel_159 = 
" ###### |" + 
"## @  ##|" + 
"# $##  #|" + 
"#  ##$ #|" + 
"#.$#. .#|" + 
"#. . ###|" + 
"#.$# ###|" + 
"#  $ $ #|" + 
"#. $   #|" + 
"########";

nivel_160 = 
"     #####  |" + 
"     #.. #  |" + 
"   ###.. #  |" + 
"   # .  ####|" + 
"#### $#    #|" + 
"#..  .# $$ #|" + 
"#.#$ ## $  #|" + 
"#   $##  ###|" + 
"#  #  ##$#  |" + 
"####$ $  #  |" + 
"   #   @##  |" + 
"   ######   ";

nivel_161 = 
"  ############## |" + 
"  #  .....  $  # |" + 
"  # $#####  $  # |" + 
"  #. ### #..# ###|" + 
" ## #  # #### $ #|" + 
" #@ $ $###...   #|" + 
" ## #   .# $#$###|" + 
"### #### #  # #  |" + 
"#    $    # $ #  |" + 
"# #.##### #   #  |" + 
"# ###   #  .# #  |" + 
"# ####### ### #  |" + 
"#  ##  $      #  |" + 
"##    $$$###  #  |" + 
" ####    # ####  |" + 
"    ######       ";

nivel_162 = 
"     ######    |" + 
"  ####....#    |" + 
"  #...  @.#    |" + 
"###$ ##  .#    |" + 
"#    ###$##    |" + 
"# #  # #  #####|" + 
"#.# ####$  $  #|" + 
"#.#  $ #  ### #|" + 
"# # $  # $### #|" + 
"# # $ ##  $  .#|" + 
"# $ $ #.  .*. #|" + 
"#  ## #  ##$###|" + 
"##### # ##   # |" + 
"   #. #$ #.$ # |" + 
"   #*    $ $ # |" + 
"  ## ##   $  # |" + 
"  # $  # ##### |" + 
"  #    . #     |" + 
"  ########     ";

nivel_163 = 
"   ###   |" + 
"  ##.##  |" + 
" ## $ ## |" + 
"## @ $ ##|" + 
"# $.#  .#|" + 
"#.  *.$ #|" + 
"## $   ##|" + 
" ## $ ## |" + 
"  ##.##  |" + 
"   ###   ";

nivel_164 = 
"   ####  |" + 
"   #  #  |" + 
"####. ###|" + 
"#  $ $$@#|" + 
"# . $ . #|" + 
"### . ###|" + 
"  ##$ #  |" + 
"   # .#  |" + 
"   ####  ";

nivel_165 = 
"     ##########    |" + 
"     #    #   #### |" + 
"     #   *   *#  # |" + 
"     ## **##     ##|" + 
"  #####  * ###**  #|" + 
"  #     #* #      #|" + 
"### * * *@* * * ###|" + 
"#      # *#     #  |" + 
"#  **### *  #####  |" + 
"##     ##** ##     |" + 
" #  #*   *   #     |" + 
" ####   #    #     |" + 
"    ##########     ";

nivel_166 = 
"####   |" + 
"#  ####|" + 
"#  #  #|" + 
"#  *  #|" + 
"##**  #|" + 
"#@*   #|" + 
"#######";

nivel_167 = 
"      #######|" + 
"      # .   #|" + 
"    ### #   #|" + 
"    #   ..###|" + 
"    #   #.## |" + 
"    ## ##..# |" + 
"  ####. #. # |" + 
"###   $$$. # |" + 
"# $ $$   #.# |" + 
"# $    $$$@# |" + 
"#   ##   ### |" + 
"##########   ";

nivel_168 = 
"  ####   |" + 
"###  ####|" + 
"#    #  #|" + 
"#  * *  #|" + 
"###***  #|" + 
"  #@*   #|" + 
"  #######";

nivel_169 = 
"    ####   |" + 
"#####  ####|" + 
"#  *   #  #|" + 
"#    * *  #|" + 
"## *#***  #|" + 
" #  #@*   #|" + 
" ##########";

nivel_170 = 
"   #### |" + 
"   #  # |" + 
"   #  ##|" + 
"#### * #|" + 
"#    * #|" + 
"# *    #|" + 
"# * *###|" + 
"###*  # |" + 
" #@*  # |" + 
" ###### ";

nivel_171 = 
"        ####|" + 
"  #######  #|" + 
"  #  #     #|" + 
"  # * *** *#|" + 
"###  **@#  #|" + 
"#   * *#  *#|" + 
"# #    * * #|" + 
"#  * * *   #|" + 
"####*## #  #|" + 
"  # * *   ##|" + 
"  #      ## |" + 
"  ########  ";

nivel_172 = 
"        ####  |" + 
"    #####  #  |" + 
"    #      #  |" + 
"    # ### *## |" + 
" #### # * * ##|" + 
" #    #  * *@#|" + 
" # #  # # * ##|" + 
" # ##      ## |" + 
"## ### #####  |" + 
"# **  * #     |" + 
"#       #     |" + 
"#  ######     |" + 
"####          ";

nivel_173 = 
"    ##### |" + 
"    #   # |" + 
"  ### $ ##|" + 
" ##  $ $ #|" + 
" #  # $  #|" + 
"## ### ###|" + 
"# . #   # |" + 
"#.+.  $ # |" + 
"# . ##### |" + 
"#####     ";

nivel_174 = 
"  ######  |" + 
"  #    #  |" + 
"###  $ ###|" + 
"#  .***  #|" + 
"# $* .*  #|" + 
"#  *.@*$ #|" + 
"#  ***.  #|" + 
"### $  ###|" + 
"  #    #  |" + 
"  ######  ";

nivel_175 = 
"  ######  |" + 
"  #    #  |" + 
"###  * ###|" + 
"#  $**$  #|" + 
"# $*..*  #|" + 
"#  *.+** #|" + 
"#  $**$  #|" + 
"### *. ###|" + 
"  #    #  |" + 
"  ######  ";

nivel_176 = 
" ############# |" + 
"##@.   .   . ##|" + 
"#*$*$*$*$*$*$ #|" + 
"#.   .   .    #|" + 
"###*###$###$#.#|" + 
"#.   .   .    #|" + 
"#*$*$*$.$*$*$ #|" + 
"## .   .   .  #|" + 
" ##############";

nivel_177 = 
"##################|" + 
"#..  #  *  #     #|" + 
"#.*. #  $  #  $  #|" + 
"#.#  #$ #$ #$ #  #|" + 
"#.#  $  #  $  # ##|" + 
"#.#  *  #  *  #  #|" + 
"#*#############  #|" + 
"#.#  *  #  *  #  #|" + 
"#.#  $  #  $  # ##|" + 
"#.#  #$ #$ #$ #  #|" + 
"#.*. #  $  #  $  #|" + 
"#..@ #  *  #     #|" + 
"##################";

nivel_178 = 
"#################|" + 
"#   #   #   #   #|" + 
"# .*# *   .*# * #|" + 
"# * # * # * #** #|" + 
"# *   .*# *     #|" + 
"#   #   #   ## ##|" + 
"#############   #|" + 
"#   #   #   # * #|" + 
"# *   **# *  ** #|" + 
"# $*# *   **#   #|" + 
"#   #   #   ## ##|" + 
"## ### ### ##   #|" + 
"#   #   #   # * #|" + 
"# *   **# *  *$ #|" + 
"# $*# *   **#  @#|" + 
"#   #   #   #####|" + 
"#############    ";

nivel_179 = 
"#####      ####|" + 
"#   ########  #|" + 
"#             #|" + 
"## $*******$  #|" + 
" # *       * ##|" + 
" # * ***** * # |" + 
" # * *. .* * # |" + 
" # * * @ * * # |" + 
" # * *. .* * # |" + 
" # * ***** * # |" + 
"## *       * # |" + 
"#  $*******$ ##|" + 
"#             #|" + 
"#  ########   #|" + 
"####      #####";

nivel_180 = 
"##########  |" + 
"#   #    #  |" + 
"# $   ## #  |" + 
"# $# @## ###|" + 
"# $ $## . .#|" + 
"###$    ..##|" + 
"  #   # .## |" + 
"  ########  ";

nivel_181 = 
" ####      ####|" + 
" #  ########  #|" + 
" #            #|" + 
" # $****###$  #|" + 
" # *       * ##|" + 
" # # ***** * # |" + 
" # * *. .# * # |" + 
" # # * @ * * # |" + 
" # * *. .# * # |" + 
" # # ***** * # |" + 
"## *       * # |" + 
"#  $#******$ # |" + 
"#            # |" + 
"###########  # |" + 
"          #### ";

nivel_182 = 
"     #####    |" + 
"    ##   #    |" + 
"    # $ $##   |" + 
"  ###$    #   |" + 
"###  **.*$####|" + 
"# $$ .....$  #|" + 
"#   *..##* $ #|" + 
"# $ *##..*   #|" + 
"#  $..... $$ #|" + 
"####$*.**  ###|" + 
"   #    $###  |" + 
"   ##$ $ #    |" + 
"    #  @##    |" + 
"    #####     ";

nivel_183 = 
" ####   |" + 
" #  ####|" + 
" # ... #|" + 
"##$.*  #|" + 
"#  *# ##|" + 
"# $$ $# |" + 
"#    @# |" + 
"####### ";

nivel_184 = 
" ######### |" + 
" #  . .  # |" + 
" # $ $ $ # |" + 
"##..#$#..##|" + 
"#.$$. .$$.#|" + 
"##.$$$$$.##|" + 
" ##.$+$.## |" + 
"  #######  ";

nivel_185 = 
"  ######  |" + 
"  #    #  |" + 
"###  $ ###|" + 
"#  $*#*  #|" + 
"# ##..*  #|" + 
"#  #.+## #|" + 
"## ##*$  #|" + 
" #  $  ###|" + 
" ##    #  |" + 
"  ######  ";

