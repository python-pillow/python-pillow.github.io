# Run pre-commit hooks against all files
alias pc := precommit
precommit:
    pre-commit run --all-files
