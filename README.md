# sesion1

## Todo
1) Try to develop a high-level understanding of ITU-MiniTwit.
2) Migrate ITU-MiniTwit to run on a modern computer running Ubuntu 18.04.

                        / MiniTwit /

           because writing todo lists is not fun


    ~ What is MiniTwit?

      A SQLite and Flask powered twitter clone

    ~ How do I use it?

      1. edit the configuration in the minitwit.py file

      2. fire up a python shell and run this:

         >>> from minitwit import init_db; init_db()

      3. now you can run the minitwit.py file with your
         python interpreter and the application will
         greet you on http://localhost:5000/
	
    ~ Is it tested?

      You betcha.  Run the `minitwit_tests.py` file to
      see the tests pass.
